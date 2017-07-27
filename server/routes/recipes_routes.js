// Our users routes
var express = require('express');

var router = express.Router();
const _ = require('lodash');
var {User} = require('../models/user_model');
var {mongoose} = require('../db/mongoose');
var {Fridge} = require('../models/fridge_model');
var {authenticate} = require('../middleware/authenticate');
var axios = require('axios');


//this is the summary of all recipes.
router.get('/', authenticate, (req, res) => {

});

//to access detial of specific recipes that you get from the summary API or /api/recipes/
router.get('/:id', authenticate, (req, res) => {

});

module.exports = router;