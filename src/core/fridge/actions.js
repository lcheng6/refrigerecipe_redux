export const fridgeActions = {
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
    type: fridgeActions.CREATE_ITEM,
    payload: {item: {title, completed: false}}
  }),

  createItemFailed: error => ({
    type: fridgeActions.CREATE_ITEM_FAILED,
    payload: {error}
  }),

  createItemFulfilled: item => ({
    type: fridgeActions.CREATE_ITEM_FULFILLED,
    payload: {item}
  }),

  removeItem: item => ({
    type: fridgeActions.REMOVE_ITEM,
    payload: {item}
  }),

  removeItemFailed: error => ({
    type: fridgeActions.REMOVE_ITEM_FAILED,
    payload: {error}
  }),

  removeItemFulfilled: item => ({
    type: fridgeActions.REMOVE_ITEM_FULFILLED,
    payload: {item}
  }),

  updateItem: (item, changes) => ({
    type: fridgeActions.UPDATE_ITEM,
    payload: {item, changes}
  }),

  updateItemFailed: error => ({
    type: fridgeActions.UPDATE_ITEM_FAILED,
    payload: {error}
  }),

  updateItemFulfilled: item => ({
    type: fridgeActions.UPDATE_ITEM_FULFILLED,
    payload: {item}
  }),

  filterItems: filterType => ({
    type: fridgeActions.FILTER_ITEMS,
    payload: {filterType}
  }),

  loadItemsFulfilled: items => ({
    type: fridgeActions.LOAD_ITEMS_FULFILLED,
    payload: {items}
  })
};
