// import { List, Record } from 'immutable'
import { getRecipesActions } from './actions';

export const initialRecipesIntroState = {
  recipes: [],
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

