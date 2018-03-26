import getRecipeDetailByRecipeIdFromSpoon from '../api/getRecipeDetailFromSpoonAPI';

export const getRecipeDetailActions = {
  FETCH_RECIPE_DETAIL_PENDING: "FETCH_RECIPE_DETAIL_PENDING",
  FETCH_RECIPE_DETAIL_REJECTED: "FETCH_RECIPE_DETAIL_REJECTED",
  FETCH_RECIPE_DETAIL_FULFILLED: "FETCH_RECIPE_DETAIL_FULFILLED",
  FETCH_RECIPE_DETAIL: "FETCH_RECIPE_DETAIL",

  //this is the dispatch for getRecipes
  getRecipeDetail: (recipeId) => {
    console.log("Dispatch getRecipeDetails");
    return {
      type: getRecipeDetailActions.FETCH_RECIPE_DETAIL,
      payload: getRecipeDetailByRecipeIdFromSpoon(recipeId)
    };}


};


export const recipeDetailCardInteractionActions = {
  TOGGLE_RECIPE_DETAIL_CARD: "TOGGLE_RECIPE_DETAIL_CARD",
  SET_CURRENT_RECIPE_ID: "SET_CURRENT_RECIPE_ID",

  recipeDetailCardToggle: (modalValue) => {
    return {
      type:recipeDetailCardInteractionActions.TOGGLE_RECIPE_DETAIL_CARD,
      payload: modalValue,
    };
  },

  setCurrentRecipeId: (recipeId) => {
    console.log('Dispatch setCurrentRecipeId');
    return {
      type: recipeDetailCardInteractionActions.SET_CURRENT_RECIPE_ID,
      payload: recipeId,
    };}
};

// export function recipeDetailCardToggle(payload) {
//   return {
//     type:recipeDetailCardInteractionActions.TOGGLE_RECIPE_DETAIL_CARD,
//     payload: payload,
//   };
// }
