const axios = require('axios')

const API_KEY = 'PUkQ3poysFmsheozAr97ixdGtaG5p1Gf87kjsnzDPLfDddaOJn'
const ROOT_URL = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&limitLicense=false&number=50&ranking=1&ingredients=`

// redux-promise-middleware requires it get a promise,
// so we create one with the api call (also a promise)
// nested inside
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
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export default getRecipesByIngredients
