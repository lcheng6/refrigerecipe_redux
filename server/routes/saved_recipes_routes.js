// Our users routes
var express = require('express');

var router = express.Router();
const _ = require('lodash');
var {User} = require('../models/user_model');
var {mongoose} = require('../db/mongoose');
var {SavedRecipe} = require('../models/saved_recipe_model');
var {authenticate} = require('../middleware/authenticate');


//TODO: add items
//TODO: nice to have features: select items


module.exports = router;