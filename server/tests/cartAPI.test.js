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
    done();
  });

  it ('should return 401 if not authenticated', (done) => {
    done();
  });

});

describe('POST /api/cart/addcontents', () => {
  it('should refer to a valid user through x-auth header', (done) => {
    done();
  });

  it('should reject the request without valid x-auth header', (done) => {
    done();
  });

  it('should modify the content of the cart by appending content into the cart', (done) => {
    done();
  });


});

