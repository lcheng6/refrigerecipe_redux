const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {User} = require('./../models/user_model');
const {Fridge} = require('./../models/fridge_model');
const {users, populateUsers, fridges, populateFridges} = require('./seed/seed');

beforeEach(populateUsers);
beforeEach(populateFridges);

describe('POST /users', () => {
  it('should create a user', (done) => {
    var email = 'example@example.com';
    var password = '123mnb!';
    var mobileNumber = '5712430741';

    request(app)
      .post('/users')
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

  it('should return validation errors if phone number is missing', (done) => {
    request(app)
      .post('/users')
      .send({
        email: 'example@example.com',
        password: '123',
      })
      .expect(400)
      .end(done);
  });

  it('should return validation errors if phone number is wrong', (done) => {
    request(app)
      .post('/users')
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
      .post('/users')
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
      .post('/users')
      .send({
        email: users[0].email,
        password: 'Password123!',
        mobileNumber: '5712430741'
      })
      .expect(400)
      .end(done);
  });

  it('should create a cart for a new user', (done) => {

  });

  it('should create a fridge for a new user', (done) => {

  });
});

describe('POST /users/login', () => {
  it('should login user and return auth token', (done) => {
    request(app)
      .post('/users/login')
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

//TODO: should check to see that a fridge and a cart are both created for this user.