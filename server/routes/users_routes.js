// Our users routes
var express = require('express');

var router = express.Router();
const _ = require('lodash');
var {User} = require('../models/user_model');
var {mongoose} = require('../db/mongoose');


router.post('/', (req, res) => {
  var body = _.pick(req.body, ['email', 'password', 'mobileNumber']);
  var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    //TODO: filter the e going to the server.
    let ret_e = e;
    res.status(400).send(ret_e);
  });
});

router.post('/login', (req, res) => {

});

//TODO: login, me, send message, 
module.exports = router;