import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { getRecipesReducer } from './core/get-recipes';
import { getRecipeDetailReducer } from './core/get-recipe-detail';
import { authReducer } from './core/auth';
import { fridgeReducer } from './core/fridge';

export default combineReducers({
  intro_recipes: getRecipesReducer,
  recipe_details: getRecipeDetailReducer,
  fridge: fridgeReducer,
  auth: authReducer,
  routing: routerReducer,
});
