import { combineReducers } from 'redux'
import { getRecipesReducer } from './core/get-recipes'

export default combineReducers({
  recipes: getRecipesReducer
})
