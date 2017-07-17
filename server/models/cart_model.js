'use strict';
require('../config/config');

const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');

var CartSchema = new mongoose.Schema({
  cart_name: {
    type: String,
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  content: [{
    item: {
      type: String,
      quantity: Number
    }
  }]
});


CartSchema.methods.toJSON = function () {
  var cart = this;
  var cartObject = cart.toObject();

  return _.pick(cartObject, ['_id', 'cart_name', 'ingredients']);
};

var Cart = mongoose.model('Cart', CartSchema);

module.exports = {Cart};