import { fridgeActions } from './actions';

export const initialState = {
  filter: '',
  items: []
}

export function fridgeReducer(state = initialState, action) {
  switch (action.type) {
    case fridgeActions.CREATE_ITEM_FULFILLED:
      return Object.assign({}, state, {
        items: state.items.unshift(action.payload.item)
      })

    case fridgeActions.LOAD_ITEMS_FULFILLED:
      return Object.assign({}, state, {
        items: action.payload.items.reverse()
      })

    case fridgeActions.REMOVE_ITEM_FULFILLED:
      return Object.assign({}, state, {
        items: state.items.filter(item => {
          return item.key !== action.payload.item.key;
        })
      })

    default:
      return state;
  }
}
