// this is an important part... the api...
import getRecipesByIngredients from '../api'
// ... implements redux-promise-middleware,
// so the rest of the FETCH_RECIPES cases are appended
import {
  FETCH_RECIPES
} from './constants'

import axios from 'axios'

export function getRecipes(ingredients) {
  return {
    type:FETCH_RECIPES,
    payload: getRecipesByIngredients(ingredients)
  }
}
