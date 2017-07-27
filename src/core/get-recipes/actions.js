// this is an important part... the api...
import getRecipesByIngredients from '../api/getRecipesIntroAPI';
import getRecipeDetailByRecipeId from '../api/getRecipeDetailAPI';

// ... implements redux-promise-middleware,
// so the rest of the FETCH_RECIPES cases are appended
export const getRecipesActions = {
  FETCH_RECIPES_PENDING: "FETCH_RECIPES_PENDING",
  FETCH_RECIPES_REJECTED: "FETCH_RECIPES_REJECTED",
  FETCH_RECIPES_FULFILLED: "FETCH_RECIPES_FULFILLED",
  FETCH_RECIPES: "FETCH_RECIPES",

  getRecipes: (ingredients) => {return {
    type: getRecipesActions.FETCH_RECIPES,
    payload: getRecipesByIngredients(ingredients)
  }; }
};

//TODO: find out how to dispatch the action to get more recipes.

export const getRecipeDetailActions = {
  FETCH_RECIPE_DETAIL_PENDING: "FETCH_RECIPE_DETAIL_PENDING",
  FETCH_RECIPE_DETAIL_REJECTED: "FETCH_RECIPE_DETAIL_REJECTED",
  FETCH_RECIPE_DETAIL_FULFILLED: "FETCH_RECIPE_DETAIL_FULFILLED",
  FETCH_RECIPE_DETAIL: "FETCH_RECIPES",

  getRecipeDetail: (recipeId) => ({
    type: getRecipeDetailActions.FETCH_RECIPE_DETAIL,
    payload: getRecipeDetailByRecipeId(recipeId)
  })
};