export const savedRecipesActions = {
  CREATE_RECIPE_DETAIL: 'CREATE_RECIPE_DETAIL',
  CREATE_RECIPE_DETAIL_FAILED: 'CREATE_RECIPE_DETAIL_FAILED',
  CREATE_RECIPE_DETAIL_FULFILLED: 'CREATE_RECIPE_DETAIL_FULFILLED',

  REMOVE_RECIPE_DETAIL: 'REMOVE_RECIPE_DETAIL',
  REMOVE_RECIPE_DETAIL_FAILED: 'REMOVE_RECIPE_DETAIL_FAILED',
  REMOVE_RECIPE_DETAIL_FULFILLED: 'REMOVE_RECIPE_DETAIL_FULFILLED',

  UPDATE_RECIPE_DETAIL: 'UPDATE_RECIPE_DETAIL',
  UPDATE_RECIPE_DETAIL_FAILED: 'UPDATE_RECIPE_DETAIL_FAILED',
  UPDATE_RECIPE_DETAIL_FULFILLED: 'UPDATE_RECIPE_DETAIL_FULFILLED',

  FILTER_RECIPE_DETAILS: 'FILTER_RECIPE_DETAILS',
  LOAD_RECIPE_DETAILS_FULFILLED: 'LOAD_RECIPE_DETAILS_FULFILLED',


  // createRecipeDetail: title => ({
  //   type: savedRecipesActions.CREATE_RECIPE_DETAIL,
  //   payload: {item: {title, completed: false}}
  // }),

  createRecipeDetail: recipe => ({
    type: savedRecipesActions.CREATE_RECIPE_DETAIL,
    payload: {item: {...recipe, completed: false}}
  }),

  createRecipeDetailFailed: error => ({
    type: savedRecipesActions.CREATE_RECIPE_DETAIL_FAILED,
    payload: {error}
  }),

  createRecipeDetailFulfilled: item => ({
    type: savedRecipesActions.CREATE_RECIPE_DETAIL_FULFILLED,
    payload: {item}
  }),

  removeRecipeDetail: item => ({
    type: savedRecipesActions.REMOVE_RECIPE_DETAIL,
    payload: {item}
  }),

  removeRecipeDetailFailed: error => ({
    type: savedRecipesActions.REMOVE_RECIPE_DETAIL_FAILED,
    payload: {error}
  }),

  removeRecipeDetailFulfilled: item => ({
    type: savedRecipesActions.REMOVE_RECIPE_DETAIL_FULFILLED,
    payload: {item}
  }),

  updateRecipeDetail: (item, changes) => ({
    type: savedRecipesActions.UPDATE_RECIPE_DETAIL,
    payload: {item, changes}
  }),

  updateRecipeDetailFailed: error => ({
    type: savedRecipesActions.UPDATE_RECIPE_DETAIL_FAILED,
    payload: {error}
  }),

  updateRecipeDetailFulfilled: item => ({
    type: savedRecipesActions.UPDATE_RECIPE_DETAIL_FULFILLED,
    payload: {item}
  }),

  filterRecipeDetails: filterType => ({
    type: savedRecipesActions.FILTER_RECIPE_DETAILS,
    payload: {filterType}
  }),

  // filterRecipeDetails: function(filterType)  {
  //   console.log('in filter recipe details');
  //   return {
  //     type: savedRecipesActions.FILTER_RECIPE_DETAILS,
  //       payload: {filterType}
  //   }
  // },

  loadRecipeDetailsFulfilled: items => ({
    type: savedRecipesActions.LOAD_RECIPE_DETAILS_FULFILLED,
    payload: {items}
  })
};
