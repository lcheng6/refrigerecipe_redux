const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {User} = require('./../models/user_model');
const {Cart} = require('./../models/cart_model');
const {users, populateUsers, carts, populateCarts} = require('./seed/seed');

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

describe('POST /api/cart/addcontents', () => {
  it('should refer to a valid user through x-auth header', (done) => {
    request(app)
      .post('/api/carts/addcontents')
      .set('x-auth', users[0].tokens[0].token)
      .send({})
      .expect(200)
      .expect((res) => {
        expect(res.body.content.length).toBe(carts[0].content.length);
      })
      .end(done);

  });

  it('should reject the request without valid x-auth header', (done) => {
    done();
  });

  it('should modify the content of the cart by appending content into the cart', (done) => {
    done();
  });


});

