// Our users routes
var express = require('express');

var User = require("../models/user_model");
var router = express.Router();

router.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password', 'mobileNumber']);
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});