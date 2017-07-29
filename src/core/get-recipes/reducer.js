// import { List, Record } from 'immutable'
import { getRecipesActions, getRecipeDetailActions } from './actions';

export const initialRecipesIntroState = {
  recipes: [],
  fetching: false,
  fetched: false,
  error: null,
};

export const initialRecipeDetailState = {
  recipesDetails: {},
  fetching: false,
  fetched: false,
  error: null,
};

export function getRecipesReducer(state = initialRecipesIntroState, action) {
  console.log('get recipes summary reducer - action received', action);
  switch (action.type) {
    case getRecipesActions.FETCH_RECIPES_PENDING:
      return Object.assign({}, state, {
        fetching: true
      });

    case getRecipesActions.FETCH_RECIPES_REJECTED:
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      });

    case getRecipesActions.FETCH_RECIPES_FULFILLED:
    console.log(action.payload);
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        recipes: action.payload.data
      });

    default:
      return state;
  }
}


export function getRecipeDetailReducer (state = initialRecipeDetailState, action){
  console.log('get recipe detail reducer - action received', action);
  var recipeId;
  switch (action.type) {
    case getRecipeDetailActions.FETCH_RECIPE_DETAIL_PENDING:
      return Object.assign({}, state, {
        fetching: true
      });

    case getRecipeDetailActions.FETCH_RECIPE_DETAIL_REJECTED:
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      });

    case getRecipeDetailActions.FETCH_RECIPE_DETAIL_FULFILLED:
      console.log(action.payload);
      recipeId = action.payload.data.id;
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        //the following lines puts a new entry into recipe details
        recipeDetails: {
          ...state["recipeDetails"],
          [recipeId] : action.payload.data}
      });

    default:
      return state;
  }
}