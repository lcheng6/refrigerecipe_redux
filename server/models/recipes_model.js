'use strict';
require('../config/config');

const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');

//insert a recipe schema.
var RecipeSchema = new mongoose.Schema({
  title: {
    type:String,
    required: true
  },
  //this id is from the spoonacular API.
  //it won't be the Mongoose _id.
  id: {
    type: Number,
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

var Recipe = mongoose.model('Recipe', FridgeSchema);

module.exports = {Recipe};