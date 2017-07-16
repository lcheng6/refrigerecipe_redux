'use strict';
require('../config/config');

const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');

var FridgeSchema = new mongoose.Schema({
    fridge_name: {
        type:String,
        require: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    ingredients: [{
        item: {
            type: String,
            quantity:Number
        }
    }]
});


FridgeSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['fridge_name', 'ingredients']);
};

var Fridge = mongoose.model('Fridge', FridgeSchema);

module.exports = {Fridge};