import { combineReducers } from 'redux'
import { getRecipesReducer } from './core/get-recipes'
// import { signUpReducer } from './core/sign-up'
import { fridgeReducer } from './core/fridge'

export default combineReducers({
  intro_recipes: getRecipesReducer,
  fridge: fridgeReducer,

  // sign_up: signUpReducer
})
