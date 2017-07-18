const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {User} = require('./../models/user_model');
const {Cart} = require('./../models/cart_model');
const {users, populateUsers, carts, populateCarts, newCartContent} = require('./seed/seed');

beforeEach(populateUsers);
beforeEach(populateCarts);

describe('Get /api/cart', () => {
  it ('should get the content of the cart if authenticated', (done) => {
    request(app)
      .get('/api/carts')
      .set('x-auth', users[0].tokens[0].token)
      .send({})
      .expect(200)
      .expect((res) => {
        expect(res.body.content.length).toBe(carts[0].content.length);
      })
      .end(done);

  });

  it ('should return 401 (unauthorized) if not authenticated', (done) => {
    request(app)
      .get('/api/carts')
      .send({})
      .expect(401)
      .end(done);
  });

});

describe('POST /api/carts/addcontent', () => {
  it('should refer to a valid user through x-auth header', (done) => {
    request(app)
      .post('/api/carts/addcontent')
      .set('x-auth', users[0].tokens[0].token)
      .send({content: []})
      .expect(200)
      .end(done);

  });

  it('should append the contents in the cart', (done) => {
      request(app)
        .post('/api/carts/addcontent')
        .set('x-auth', users[0].tokens[0].token)
        .send({content: newCartContent})
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          Cart.findByUserId(users[0]._id).then((cart) => {
            expect(cart.content.length).toBe(newCartContent.length + carts[0].content.length);
            //expect(cart.content).toInclude({item: "liquor", quantity: 50000});
            done();
          }).catch((e) => done(e));
        });
  });

  //TODO: check also a previous element was also present

});