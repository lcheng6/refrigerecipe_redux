import { createSelector } from 'reselect';


export function getIngredients(state) {
  return state.ingredients;
}

export function getIngredientList(state) {
  return getIngredients(state).list;
}

export const getCurrentIngredients = createSelector(
  getIngredientList,
);
