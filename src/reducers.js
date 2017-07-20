import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { getRecipesReducer } from './core/get-recipes'
import { fridgeReducer } from './core/fridge'
// import { signUpReducer } from './core/sign-up'

export default combineReducers({
  intro_recipes: getRecipesReducer,
  fridge: fridgeReducer,
  form: formReducer
  // sign_up: signUpReducer
})
