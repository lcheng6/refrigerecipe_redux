// this is an important part... the api...
import getRecipesByIngredients from '../api/getRecipesIntroAPI'
// ... implements redux-promise-middleware,
// so the rest of the FETCH_RECIPES cases are appended
export const getRecipesActions = {
  FETCH_RECIPES_PENDING: "FETCH_RECIPES_PENDING",
  FETCH_RECIPES_REJECTED: "FETCH_RECIPES_REJECTED",
  FETCH_RECIPES_FULFILLED: "FETCH_RECIPES_FULFILLED",
  FETCH_RECIPES: "FETCH_RECIPES",

  getRecipes: ingredients => ({
    type: getRecipesActions.FETCH_RECIPES,
    payload: getRecipesByIngredients(ingredients)
  })
}
