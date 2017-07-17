// import axios from 'axios'
const axios = require('axios')
const API_KEY = 'PUkQ3poysFmsheozAr97ixdGtaG5p1Gf87kjsnzDPLfDddaOJn'
const ROOT_URL = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&limitLicense=false&number=30&ranking=1&ingredients=`

const GET_RECIPES = 'GET_RECIPES'

let ingredients = 'apples%2Cflour%2Csugar'

function getRecipesReducer(ingredients) {
  axios({
    method: 'get',
    url: ROOT_URL + API_KEY + ingredients,
    headers: {
      "X-Mashape-Key": "PUkQ3poysFmsheozAr97ixdGtaG5p1Gf87kjsnzDPLfDddaOJn",
      "Accept": "application/json",
    }
  })
  .then(response => {
    console.log(response.data)
  })

  // const request = axios.get(ingredients, config)
  // console.log('Request ', request)
  //
  // return {
  //   type: GET_RECIPES,
  //   payload: request
  // }
}

getRecipesReducer(ingredients)
