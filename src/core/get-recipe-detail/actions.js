import getRecipeDetailByRecipeId from '../api/getRecipeDetailAPI';

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
      payload: getRecipeDetailByRecipeId(recipeId)
    };}
};

