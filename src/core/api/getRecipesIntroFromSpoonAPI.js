const axios = require('axios');

const API_KEY = 'G33IWA9BzKmshCOQoLZe3QV4LKnup1tNXmdjsnwCZVLOryqB9h';
const ROOT_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients';

// redux-promise-middleware requires it get a promise,
// so we create one with the api call (also a promise)
// nested inside
const getRecipesByIngredientsFromSpoon = (ingredients) => {
  console.log("fetching recipe summary from spoonacular api for ingredients: " + ingredients);
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: ROOT_URL,
      headers: {
        "X-Mashape-Key": API_KEY,
        "Accept": "application/json",
      },
      params: {
        "fillIngredients": "true",
        // "ingredients": ["apples","flour","sugar", "butter", "marshmallow", "orange"].join(","),
        "ingredients": ingredients.join(","),
        "limitLicense": "false",
        "number": "50",
        "ranking": "1"
      }
    })
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
  });
};

export default getRecipesByIngredientsFromSpoon;
