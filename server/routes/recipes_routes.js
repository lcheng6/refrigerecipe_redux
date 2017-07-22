// Our users routes
var express = require('express');
require('../config/config');

var router = express.Router();
const _ = require('lodash');
var {User} = require('../models/user_model');
var {mongoose} = require('../db/mongoose');
var {Fridge} = require('../models/fridge_model');
var {Recipe} = require('../models/recipes_model');
var {authenticate} = require('../middleware/authenticate');
var axios = require('axios');

const SpoonacularFindByRecipesURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients";
const SpoonacularRecipeDetailURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
const SpoonacularRecipeDetailOption = "/information?includeNutrition=true";

function cacheRecipesDetail (params) {

  axios.get(params.queryUrl,
    {
      headers: {
        "X-Mashape-Key": process.env.spponacularAPIKey,
        "Accept": "application/json"
      }
    })
    .then(function(response) {
      var filtered_data = _.pick(response.data,
        "id", "title", "image", "vegetarian", "vegan","cookingMinutes","preparationMinutes","readyInMinutes",
        "extendedIngredients", "pricePerServing", "servings", "sourceUrl", "spoonacularSourceUrl", "nutrition");
      filtered_data.user_id = params.user_id;
      filtered_data.createdAt = new Date();

      var query = {'id': filtered_data.id};
      Recipe.findOneAndUpdate(query, filtered_data, {upsert:true}, function(err, doc) {
        if (err) {
          //do nothing; should log it.
          //TODO: log it
        }else {
          //do nothing. should log it.
        }
      });
    });
}

//this is the summary of all recipes. Go to spoonacular and get the summary.
router.get('/', authenticate, (req, res) => {
  //first get the items from the fridge.
  var user_id = req.user._id;
  Fridge.findByUserId(req.user._id)
    .then((fridge) => {
      if(!fridge) {
        res.status(400).send('Fridge not found');
      }else {
        var ingredients = _.map(fridge.content, (item) => {
          return item.item;
        });

        return axios.get(SpoonacularFindByRecipesURL,
          {
            headers: {
              "X-Mashape-Key": process.env.spponacularAPIKey,
              "Accept": "application/json"
            },
            params: {
              "fillIngredients": "true",
              // "ingredients": ["apples","flour","sugar"].join(","),
              "ingredients": ingredients.join(","),
              "limitLicense": "false",
              "number": "50",
              "ranking": "1"
            }
          });
      }
    })
    .then((response) => {
    //get the response from the spoonacular recipes summary API
      var filtered_data = response.data.map(function (recipe) {
        recipe["missedIngredients"] = recipe["missedIngredients"].map(function (missed_ingredient) {
          return _.pick(missed_ingredient, "id", "amount", "unit", "name", "image", "extendedName");
        });
        return _.pick(recipe, "id", "title", "image", "missedIngredientCount", "missedIngredients",
          "usedIngredientCount", "usedIngredients", "likes");
      });
      return filtered_data;
    })
    .then((filtered_data) => {
      res.status(200).send(filtered_data);
      return filtered_data;
    })
    .then((recipes_summary) => {
      //now start getting the recipes detail from Spoonacular.
      //mark each result with the user._id, and createdTime.
      recipes_summary.map(function(recipe_summary) {
        var queryUrl = SpoonacularRecipeDetailURL + recipe_summary.id + SpoonacularRecipeDetailOption;
        //console.log(queryUrl);
        //Go get the recipes detail and save it in mongoose.
        //TODO: might need debounce, right now run this axios as fast as I can.
        cacheRecipesDetail({queryUrl, user_id});
      });
    });
});



//to access detial of specific recipes that you get from the summary API or /api/recipes/
router.get('/:id', authenticate, (req, res) => {

});

module.exports = router;