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


describe('POST /api/fridges/setcontent', () => {
  it('should refer to a valid user through x-auth header', (done) => {
    request(app)
      .post('/api/fridges/setcontent')
      .set('x-auth', users[0].tokens[0].token)
      .send({content: []})
      .expect(200)
      .end(done);

  });

  it('should set the contents in the cart', (done) => {
    request(app)
      .post('/api/fridges/setcontent')
      .set('x-auth', users[0].tokens[0].token)
      .send({content: setFridgeContent})
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Fridge.findByUserId(users[0]._id).then((fridge) => {
          expect(fridge.content.length).toBe(setFridgeContent.length);
          //expect(cart.content).toInclude({item: "liquor", quantity: 50000});
          done();
        }).catch((e) => done(e));
      });
  });

  //TODO: check also a previous element was also present

});