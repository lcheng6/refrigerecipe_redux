import { getRecipeDetailActions, recipeDetailCardInteractionActions } from './actions';
export const initialRecipeDetailState = {
  recipeDetails: {},
  currentRecipeId: null,
  fetching: false,
  fetched: false,
  error: null,
  toggle:false,
};


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
        //TODO: work out whether to use recipeDetail or currentRecipeId
        recipeDetails: {
          ...state["recipeDetails"],
          [recipeId] : action.payload.data
        },
        currentRecipeId: recipeId,
      });

    case recipeDetailCardInteractionActions.TOGGLE_RECIPE_DETAIL_CARD:
      console.log('toggle action received payload ' + action.payload);
      return Object.assign({}, state, {
        toggle:action.payload
      });

    default:
      return state;
  }
}
//
// export function recipeDetailCardInteractionReducer (state = initialRecipeDetailState, action) {
//   console.log('Recipe Detail Card Recducer - action received', action);
//   switch(action.type) {
//     case recipeRecipeDetailCardInteractionActions.TOGGLE_RECIPE_DETAIL_CARD:
//       console.log('toggle action received payload ' + action.payload);
//       return state;
//
//     default:
//       return state;
//   }
// }