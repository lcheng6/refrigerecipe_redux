const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {User} = require('./../models/user_model');
const {Fridge} = require('./../models/fridge_model');
const {users, populateUsers, fridges, populateFridges} = require('./seed/seed');

beforeEach(populateUsers);
beforeEach(populateFridges);

describe('Get /recipes', () => {
  //this.timeout(5000);
  it ('should get recipes summary if authenticated', function(done) {

    //increase timeout for Slow spoonacular API
    // inorder to use this properly, must must the function callback instead of the () => {} callback
    this.timeout(5000);
    request(app)
      .get('/api/recipes')
      .set('x-auth', users[0].tokens[0].token)
      .send({})
      .expect(200)
      .expect((res) => {
        expect(res.body.length).toBeGreaterThan(20);
      })
      .end(done);
  });

  it ('should return 401 (unauthorized) if not authenticated', (done) => {
    request(app)
      .get('/api/recipes')
      .send({})
      .expect(401)
      .end(done);
  });
});

describe ('Get /recipes/:id', () => {
  it('should be triggered by /recipes call', function(done) {
    this.timeout(5000);

  });

});