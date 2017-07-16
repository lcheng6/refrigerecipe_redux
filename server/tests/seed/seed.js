const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {User} = require('./../../models/user_model');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
    _id: userOneId,
    email: 'liangc@example.com',
    password: 'userOnePass',
    mobileNumber: "5712430741",
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.PASSWORD_SALT).toString()
    }]
}, {
    _id: userTwoId,
    email: 'not_signed_in@example.com',
    password: 'userTwoPass',
    mobileNumber: "5712430741"

}];


const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

module.exports = {users, populateUsers};
