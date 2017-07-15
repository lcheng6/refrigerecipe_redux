export const ingredientActions = {
  CREATE_INGREDIENT: 'CREATE_INGREDIENT',
  CREATE_INGREDIENT_FAILED: 'CREATE_INGREDIENT_FAILED',
  CREATE_INGREDIENT_FULFILLED: 'CREATE_INGREDIENT_FULFILLED',

  REMOVE_INGREDIENT: 'REMOVE_INGREDIENT',
  REMOVE_INGREDIENT_FAILED: 'REMOVE_INGREDIENT_FAILED',
  REMOVE_INGREDIENT_FULFILLED: 'REMOVE_INGREDIENT_FULFILLED',

  LOAD_INGREDIENTS_FULFILLED: 'LOAD_INGREDIENTS_FULFILLED',


  createIngredient: title => ({
    type: ingredientActions.CREATE_INGREDIENT,
    payload: {item: {title, completed: false}}
  }),

  createIngredientFailed: error => ({
    type: ingredientActions.CREATE_INGREDIENT_FAILED,
    payload: {error}
  }),

  createIngredientFulfilled: item => ({
    type: ingredientActions.CREATE_INGREDIENT_FULFILLED,
    payload: {item}
  }),

  removeIngredient: item => ({
    type: ingredientActions.REMOVE_INGREDIENT,
    payload: {item}
  }),

  removeIngredientFailed: error => ({
    type: ingredientActions.REMOVE_INGREDIENT_FAILED,
    payload: {error}
  }),

  removeIngredientFulfilled: item => ({
    type: ingredientActions.REMOVE_INGREDIENT_FULFILLED,
    payload: {item}
  }),

  loadIngredientsFulfilled: items => ({
    type: ingredientActions.LOAD_INGREDIENTS_FULFILLED,
    payload: {items}
  })
};
