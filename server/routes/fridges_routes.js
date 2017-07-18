// Our users routes
var express = require('express');

var router = express.Router();
const _ = require('lodash');
var {User} = require('../models/user_model');
var {mongoose} = require('../db/mongoose');
var {Fridge} = require('../models/fridge_model');
var {authenticate} = require('../middleware/authenticate');


//TODO: set items in a fridge

router.get('/', authenticate, (req, res) => {
  Fridge.findByUserId(req.user._id).then((fridge) => {
    res.send(fridge);
  }, (e) => {
    res.status(400).send(e);
  });
});

router.post('/setcontent', authenticate, (req, res) => {

  if(!req.body.content instanceof Array) {
    res.status(500).send('wrong input type');
  }

  var newContents = req.body.content;

  Fridge.findByUserId(req.user._id)
    .then((fridge) => {
      if (!fridge) {
        res.status(400).send();
      }else {

        fridge.update(
          {
            $set: {content: newContents}
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