const axios = require('axios') // tested this in node cli to make sure it worked first
// import axios from 'axios'
const API_KEY = 'PUkQ3poysFmsheozAr97ixdGtaG5p1Gf87kjsnzDPLfDddaOJn'
const ROOT_URL = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&limitLicense=false&number=50&ranking=1&ingredients=`


const getRecipesByIngredients = (ingredients) => {
  console.log("fetching from api ...")
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: ROOT_URL + ingredients + API_KEY,
      headers: {
        "X-Mashape-Key": "PUkQ3poysFmsheozAr97ixdGtaG5p1Gf87kjsnzDPLfDddaOJn",
        "Accept": "application/json",
      }
    })
    .then((request) => {
      resolve(request)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export default getRecipesByIngredients
