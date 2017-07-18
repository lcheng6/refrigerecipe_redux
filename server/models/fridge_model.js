'use strict';
require('../config/config');

const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');

var FridgeSchema = new mongoose.Schema({
  fridge_name: {
    type:String,
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  content: [{
    item: {
      type: String
    },
    quantity: {
      type: Number
    }
  }]
});


FridgeSchema.methods.toJSON = function () {
  var fridge = this;
  var fridgeObject = fridge.toObject();

  return _.pick(fridgeObject, ['_id', 'fridge_name', 'user_id', 'content']);
};

FridgeSchema.statics.findByUserId = function(user_id) {
  var Fridge = this;

  return Fridge.findOne({user_id});
};

var Fridge = mongoose.model('Fridge', FridgeSchema);

module.exports = {Fridge};