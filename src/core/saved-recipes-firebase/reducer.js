import { List, Record } from 'immutable';
import { savedRecipesActions } from './actions';


export const InitialState = new Record({
  filter: '',
  items: new List()
});


export function savedRecipesReducer(state = new InitialState(), {payload, type}) {
  console.log('in savedRecipesReducer type: ' + type);
  switch (type) {
    case savedRecipesActions.CREATE_ITEM_FULFILLED:
      console.log('In savedRecipesActions CREATE_ITEM_FULFILLED');
      return state.set('items', state.items.unshift(payload.item));

    case savedRecipesActions.FILTER_ITEMS:
      return state.set('filter', payload.filterType || '');

    case savedRecipesActions.LOAD_ITEMS_FULFILLED:
      return state.set('items', new List(payload.items.reverse()));

    case savedRecipesActions.REMOVE_ITEM_FULFILLED:
      return state.set('items', state.items.filter(item => {
        return item.key !== payload.item.key;
      }));

    case savedRecipesActions.UPDATE_ITEM_FULFILLED:
      return state.set('items', state.items.map(item => {
        return item.key === payload.item.key ? payload.item : item;
      }));

    default:
      return state;
  }
}
