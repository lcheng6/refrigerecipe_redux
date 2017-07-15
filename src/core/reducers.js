import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { ingredientsReducer } from './ingredients';


export default combineReducers({
  auth: authReducer,
  ingredients: ingredientsReducer
});
