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

router.get('/', authenticate, (req, res) => {
  Cart.findByUserId(req.user._id).then((cart) => {
    res.send(cart);
  }, (e) => {
    res.status(400).send(e);
  });
});

//The addcontent must be in this format:
// [{item: <item name>, quantity: <number>}]
// This function will not return the updated content in the fridge.
// Only a follow on read of the fridge will get it.

router.post('/addcontent', authenticate, (req, res) => {
  //console.log(req.body);
  if(!req.body.content instanceof Array) {
    res.status(500).send('wrong input type');
  }

  var newContents = req.body.content;

  Cart.findByUserId(req.user._id)
    .then((cart) => {
      if (!cart) {
        res.status(400).send();
      }else {

        cart.update(
          {
            $push: {content: {$each: newContents}}
          }, {safe: true, upsert: true},
          (err, raw) => {
            if (err) {
              res.status(500).send(err);
            }

            res.status(200).send();
          }
        );
      }
  }).catch((e) => {
    //catch fucking exception and update user with 500 internal error.
    res.status(500).send(e);
  });
});

module.exports = router;