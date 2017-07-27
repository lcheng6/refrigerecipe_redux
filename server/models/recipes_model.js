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
  },
  createdAt: {
    type:mongoose.Schema.Types.Date,
    required: true
  },
}, {strict: false});

var Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = {Recipe};