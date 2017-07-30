import { createSelector } from 'reselect';


export function getItems(state) {
  return state.saveRecipes;
}

export function getSaveRecipesFilter(state) {
  return getItems(state).filter;
}

export function getSaveRecipesList(state) {
  return getItems(state).items;
}


//=====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getVisibleItems = createSelector(
  getSaveRecipesFilter,
  getSaveRecipesList,
  (filter, saveRecipesList) => {
    switch (filter) {
      case 'active':
        return saveRecipesList.filter(item => !item.completed);

      case 'completed':
        return saveRecipesList.filter(item => item.completed);

      default:
        return saveRecipesList;
    }
  }
);
