const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {User} = require('./../../models/user_model');
const {Fridge} = require('./../../models/fridge_model');
const {Cart} = require('./../../models/cart_model');

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

const newUserGen = function(newId) {
  return {
    email: 'newuser' + newId + '@example.com',
    password: 'newuserpass' + newId,
    mobileNumber: "7035551234"
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
  _id:fridgeOneId,
  fridge_name:"FridgeOne",
  user_id:userOneId,
  content: [
    {item:"beef", quantity:1},
    {item:"mushroom", quantity:1},
    {item:"celery", quantity:1},
    {item:"chicken breast", quantity: 1}
  ]
},
{
  _id:fridgeTwoId,
  fridge_name:'FridgeTwo',
  user_id:userTwoId,
  content: [
    {item:"beef", quantity:1},
    {item:"mushroom", quantity:1},
    {item:"beer", quantity:1},
    {item:"chicken breast", quantity: 1}
  ]
}];


const populateFridges = (done) => {
  Fridge.remove({}).then(() => {
    var fridgeOne = new Fridge(fridges[0]).save();
    var fridgeTwo = new Fridge(fridges[1]).save();

    return Promise.all([fridgeOne, fridgeTwo]);
  }).then(() => done());
};

const carts = [
  {
    _id:cartOneId,
    cart_name:"CartOne",
    user_id:userOneId,
    content: [
      {item:"rosemary", quantity:1},
      {item:"coffee", quantity:1},
      {item:"sub rolls", quantity:1},
      {item:"carrots", quantity: 1}
    ]
  },
  {
    _id:cartTwoId,
    cart_name:'CartTwo',
    user_id:userTwoId,
    content: [
      {item:"tomatoes", quantity:1},
      {item:"oregano", quantity:1},
      {item:"beer", quantity:1},
      {item:"chuck roast", quantity: 1}
    ]
  }
];

const populateCarts = (done) => {
  Cart.remove({}).then(() => {

    var cartOne = new Cart(carts[0]).save();
    var cartTwo = new Cart(carts[1]).save();

    return Promise.all([cartOne, cartTwo]);

  }).then(() => done());
};

newCartContent = [{item: "chicken", quantity: 2}, {item: "liquor", quantity: 50000}];

setFridgeContent = [{item: "Butter", quantity:2}, {item: "Eggs", quantity: 10}, {item: "Apples", quantity: 2},
  {item:"Corn", quantity:5}, {item: "Bread", quantity: 2}];



module.exports = {users, populateUsers, fridges, populateFridges, carts, populateCarts,
  newUserGen, newCartContent, setFridgeContent};
