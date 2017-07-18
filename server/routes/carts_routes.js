// Our users routes
var express = require('express');

var router = express.Router();
const _ = require('lodash');
var {User} = require('../models/user_model');
var {mongoose} = require('../db/mongoose');
var {Cart} = require('../models/cart_model');
var {authenticate} = require('../middleware/authenticate');


//TODO: add items
//TODO: nice to have features: select items


module.exports = router;