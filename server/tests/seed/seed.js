const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {User} = require('./../../models/user_model');
const {Fridge} = require('./../../models/fridge_model');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const fridgeOneId = new ObjectID();
const fridgeTwoId = new ObjectID();

const cartOneId = new ObjectID();
const cartTwoId = new ObjectID();

const users = [{
  //userOneId is signed in.
  _id: userOneId,
  email: 'liangc@example.com',
  password: 'userOnePass',
  mobileNumber: "5712430741",
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.PASSWORD_SALT).toString()
  }]
}, {
  //userTwo is not yet signed in.
  _id: userTwoId,
  email: 'not_signed_in@example.com',
  password: 'userTwoPass',
  mobileNumber: "5712430741"

}];

newUserGen = function(newId) {
  return {
    email: `newuser{newId}@example.com`,
    password: `newuserpass{newId}`,
    mobilenumber: "7035551234"
  };
};


const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

const fridges = [{

}];

const populateFridges = (done) => {
  Fridge.remove({}).then(() => {

  }).then(() => done());
};

const carts = [{}];

const populateCarts = (done) => {
  Cart.remove({}).then(() => {

  }).then(() => done());
};


module.exports = {users, populateUsers, fridges, populateFridges, carts, populateCarts};
