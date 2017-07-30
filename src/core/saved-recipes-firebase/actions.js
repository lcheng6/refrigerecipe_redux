export const saveRecipesActions = {
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


  createItem: title => ({
    type: saveRecipesActions.CREATE_ITEM,
    payload: {item: {title, completed: false}}
  }),

  createItemFailed: error => ({
    type: saveRecipesActions.CREATE_ITEM_FAILED,
    payload: {error}
  }),

  createItemFulfilled: item => ({
    type: saveRecipesActions.CREATE_ITEM_FULFILLED,
    payload: {item}
  }),

  removeItem: item => ({
    type: saveRecipesActions.REMOVE_ITEM,
    payload: {item}
  }),

  removeItemFailed: error => ({
    type: saveRecipesActions.REMOVE_ITEM_FAILED,
    payload: {error}
  }),

  removeItemFulfilled: item => ({
    type: saveRecipesActions.REMOVE_ITEM_FULFILLED,
    payload: {item}
  }),

  updateItem: (item, changes) => ({
    type: saveRecipesActions.UPDATE_ITEM,
    payload: {item, changes}
  }),

  updateItemFailed: error => ({
    type: saveRecipesActions.UPDATE_ITEM_FAILED,
    payload: {error}
  }),

  updateItemFulfilled: item => ({
    type: saveRecipesActions.UPDATE_ITEM_FULFILLED,
    payload: {item}
  }),

  filterItems: filterType => ({
    type: saveRecipesActions.FILTER_ITEMS,
    payload: {filterType}
  }),

  loadItemsFulfilled: items => ({
    type: saveRecipesActions.LOAD_ITEMS_FULFILLED,
    payload: {items}
  })
};
