// Our users routes
var express = require('express');

var router = express.Router();
const _ = require('lodash');
var {User} = require('../models/user_model');
var {mongoose} = require('../db/mongoose');
var {Fridge} = require('../models/fridge_model');
var {authenticate} = require('../middleware/authenticate');



module.exports = router;