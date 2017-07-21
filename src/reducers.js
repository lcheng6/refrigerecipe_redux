import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { getRecipesReducer } from './core/get-recipes'
import { authReducer } from './core/auth';
import { fridgeReducer } from './core/fridge'

export default combineReducers({
  intro_recipes: getRecipesReducer,
  fridge: fridgeReducer,
  auth: authReducer,
  routing: routerReducer,
})
