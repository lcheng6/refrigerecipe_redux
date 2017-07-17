// good video for redux: https://www.youtube.com/watch?v=Td-2D-_7Y2E&index=17&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b#t=78.911747

import axios from 'axios'
// const axios = require('axios') // tested this in node cli to make sure it worked first

const API_KEY = 'PUkQ3poysFmsheozAr97ixdGtaG5p1Gf87kjsnzDPLfDddaOJn'
const ROOT_URL = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&limitLicense=false&number=30&ranking=1&ingredients=`

export const FETCH_RECIPES_PENDING = "FETCH_RECIPES_PENDING"
export const FETCH_RECIPES_REJECTED = "FETCH_RECIPES_REJECTED"
export const FETCH_RECIPES_FULFILLED = "FETCH_RECIPES_FULFILLED"


export function getRecipes(ingredients) {
  return function(dispatch) {
    axios({
      method: 'get',
      url: ROOT_URL + ingredients + API_KEY,
      headers: {
        "X-Mashape-Key": "PUkQ3poysFmsheozAr97ixdGtaG5p1Gf87kjsnzDPLfDddaOJn",
        "Accept": "application/json",
      }
    })
    .then(
      dispatch({type: "FETCH_RECIPES_PENDING"})
    )
    .then((response) => {
      dispatch({type: "FETCH_RECIPES_FULFILLED", payload: response.data[0]})
    })
    .catch((error) => {
      dispatch({type: "FETCH_RECIPES_REJECTED", payload: error})
    })
  }
}

  // const request = axios.get(ingredients, config)
  // console.log('Request ', request)
  //
  // return {
  //   type: GET_RECIPES,
  //   payload: request
  // }
// getRecipesReducer(ingredients)
