import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { getRecipesReducer, getRecipeDetailReducer} from './core/get-recipes';
import { authReducer } from './core/auth';
import { fridgeReducer } from './core/fridge';

export default combineReducers({
  intro_recipes: getRecipesReducer,
  recipe_details: getRecipeDetailReducer,
  fridge: fridgeReducer,
  auth: authReducer,
  routing: routerReducer,
});
