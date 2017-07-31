export const savedRecipesActions = {
  CREATE_ITEM: 'CREATE_ITEM',
  CREATE_ITEM_FAILED: 'CREATE_ITEM_FAILED',
  CREATE_ITEM_FULFILLED: 'CREATE_ITEM_FULFILLED',

  REMOVE_ITEM: 'REMOVE_ITEM',
  REMOVE_ITEM_FAILED: 'REMOVE_ITEM_FAILED',
  REMOVE_ITEM_FULFILLED: 'REMOVE_ITEM_FULFILLED',

  UPDATE_ITEM: 'UPDATE_ITEM',
  UPDATE_ITEM_FAILED: 'UPDATE_ITEM_FAILED',
  UPDATE_ITEM_FULFILLED: 'UPDATE_ITEM_FULFILLED',

  FILTER_ITEMS: 'FILTER_ITEMS',
  LOAD_ITEMS_FULFILLED: 'LOAD_ITEMS_FULFILLED',


  // createItem: title => ({
  //   type: savedRecipesActions.CREATE_ITEM,
  //   payload: {item: {title, completed: false}}
  // }),

  createItem: recipe => ({
    type: savedRecipesActions.CREATE_ITEM,
    payload: {item: {...recipe, completed: false}}
  }),

  createItemFailed: error => ({
    type: savedRecipesActions.CREATE_ITEM_FAILED,
    payload: {error}
  }),

  createItemFulfilled: item => ({
    type: savedRecipesActions.CREATE_ITEM_FULFILLED,
    payload: {item}
  }),

  removeItem: item => ({
    type: savedRecipesActions.REMOVE_ITEM,
    payload: {item}
  }),

  removeItemFailed: error => ({
    type: savedRecipesActions.REMOVE_ITEM_FAILED,
    payload: {error}
  }),

  removeItemFulfilled: item => ({
    type: savedRecipesActions.REMOVE_ITEM_FULFILLED,
    payload: {item}
  }),

  updateItem: (item, changes) => ({
    type: savedRecipesActions.UPDATE_ITEM,
    payload: {item, changes}
  }),

  updateItemFailed: error => ({
    type: savedRecipesActions.UPDATE_ITEM_FAILED,
    payload: {error}
  }),

  updateItemFulfilled: item => ({
    type: savedRecipesActions.UPDATE_ITEM_FULFILLED,
    payload: {item}
  }),

  filterItems: filterType => ({
    type: savedRecipesActions.FILTER_ITEMS,
    payload: {filterType}
  }),

  loadItemsFulfilled: items => ({
    type: savedRecipesActions.LOAD_ITEMS_FULFILLED,
    payload: {items}
  })
};
