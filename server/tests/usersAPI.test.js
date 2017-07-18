const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {User} = require('./../models/user_model');
const {Fridge} = require('./../models/fridge_model');
const {Cart} = require('./../models/cart_model');
const {users, populateUsers, fridges, populateFridges} = require('./seed/seed');

beforeEach(populateUsers);
beforeEach(populateFridges);

describe('POST /api/users', () => {
  it('should create a user', (done) => {
    var email = 'example1@example.com';
    var password = '123mnb!';
    var mobileNumber = '5712430741';

    request(app)
      .post('/api/users')
      .send({email, password, mobileNumber})
      .expect(200)
      .expect((res) => {
        expect(res.headers['x-auth']).toExist();
        expect(res.body._id).toExist();
        expect(res.body.email).toBe(email);
        expect(res.body.mobileNumber).toBe(mobileNumber);
      })
      .end((err) => {
        if (err) {
          return done(err);
        }

        User.findOne({email}).then((user) => {
          expect(user).toExist();
          expect(user.password).toNotBe(password);
          done();
        }).catch((e) => done(e));
      });
  });

  //Verify a cart and fridge is created for a new user.
  //Will need to add saved recipes later.
  it('should create a cart and fridge for a new user', (done) => {
    var email = 'example2@example.com';
    var password = '123mnb!';
    var mobileNumber = '5712430741';
    var userId;

    request(app)
      .post('/api/users')
      .send({email, password, mobileNumber})
      .expect(200)
      .expect((res) => {
        expect(res.headers['x-auth']).toExist();
        expect(res.body._id).toExist();
        expect(res.body.email).toBe(email);
        expect(res.body.mobileNumber).toBe(mobileNumber);
      })
      .end((err) => {
        if (err) {
          return done(err);
        }

        User.findOne({email}).then((user) => {
          expect(user).toExist();
          expect(user.password).toNotBe(password);
          userId = user._id;

          return Fridge.findByUserId(userId);
        }).then((fridge) => {
          expect(fridge).toExist();
          expect(fridge.fridge_name).toBe('default');
          expect(fridge.content.length).toBe(0);
        }).then(() => {
          return Cart.findByUserId(userId);
        }).then((cart) => {
          expect(cart).toExist();
          expect(cart.cart_name).toBe('default');
          expect(cart.content.length).toBe(0);
          done();
        })
          .catch((e) => done(e));
      });
  });

  it('should return validation errors if phone number is missing', (done) => {
    request(app)
      .post('/api/users')
      .send({
        email: 'example@example.com',
        password: '123',
      })
      .expect(400)
      .end(done);
  });

  it('should return validation errors if phone number is wrong', (done) => {
    request(app)
      .post('/api/users')
      .send({
        email: 'example@example.com',
        password: '123',
        mobileNumber: "571"
      })
      .expect(400)
      .end(done);
  });

  it('should return validation errors if email has the wrong format', (done) => {
    request(app)
      .post('/api/users')
      .send({
        email: 'example.com',
        password: '123',
        mobileNumber: '5712430741'
      })
      .expect(400)
      .end(done);
  });

  it('should not create user if email in use', (done) => {
    request(app)
      .post('/api/users')
      .send({
        email: users[0].email,
        password: 'Password123!',
        mobileNumber: '5712430741'
      })
      .expect(400)
      .end(done);
  });


});

//TODO: should check to see that a fridge and a cart are both created for this user.

describe('POST /api/users/login', () => {
  it('should login user and return auth token', (done) => {
    request(app)
      .post('/api/users/login')
      .send({
        email: users[1].email,
        password: users[1].password
      })
      .expect(200)
      .expect((res) => {
        expect(res.headers['x-auth']).toExist();
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        User.findById(users[1]._id).then((user) => {
          expect(user.tokens[0]).toInclude({
            access: 'auth',
            token: res.headers['x-auth']
          });
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('GET /api/users/me', () => {
  it('should return user if authenticated', (done) => {
    request(app)
      .get('/api/users/me')
      .set('x-auth', users[0].tokens[0].token)
      .expect(200)
      .expect((res) => {
        expect(res.body._id).toBe(users[0]._id.toHexString());
        expect(res.body.email).toBe(users[0].email);
      })
      .end(done);
  });

  it('should return 401 if not authenticated', (done) => {
    request(app)
      .get('/api/users/me')
      .expect(401)
      .expect((res) => {
        expect(res.body).toEqual({});
      })
      .end(done);
  });
});

describe('DELETE /api/users/me/token', () => {
  it('should remove auth token on logout', (done) => {
    request(app)
      .delete('/api/users/me/token')
      .set('x-auth', users[0].tokens[0].token)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        User.findById(users[0]._id).then((user) => {
          expect(user.tokens.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
});
