const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {User} = require('./../models/user_model');
const {Fridge} = require('./../models/fridge_model');
const {users, populateUsers, fridges, populateFridges, setFridgeContent} = require('./seed/seed');

beforeEach(populateUsers);
beforeEach(populateFridges);

describe('Get /api/fridges', () => {
  it ('should get the content of the cart if authenticated', (done) => {
    request(app)
      .get('/api/fridges')
      .set('x-auth', users[0].tokens[0].token)
      .send({})
      .expect(200)
      .expect((res) => {
        expect(res.body.content.length).toBe(fridges[0].content.length);
      })
      .end(done);

  });

  it ('should return 401 (unauthorized) if not authenticated', (done) => {
    request(app)
      .get('/api/fridges')
      .send({})
      .expect(401)
      .end(done);
  });
});