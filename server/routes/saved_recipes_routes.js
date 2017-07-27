// Our users routes
var express = require('express');

var router = express.Router();
const _ = require('lodash');
var {User} = require('../models/user_model');
var {mongoose} = require('../db/mongoose');
var {Recipe} = require('../models/recipes_model');
var {SavedRecipe} = require('../models/saved_recipe_model');
var {authenticate} = require('../middleware/authenticate');

router.get('/', authenticate, (req, res) => {
  //get all saved recipes .
  var user_id = req.user._id;
  SavedRecipe.findByUserId(user_id)
    .then((recipes) => {
      if(!recipes){
        res.status(404).send('Saved Recipes not found');
      }
      else {

      }
    });
});

router.post('/addRecipe/:id', authenticate, (req, res) => {
  //save one recipe that is already in our local cache.
  var user_id = req.user._id;
  Recipe.findOne({});
});

module.exports = router;