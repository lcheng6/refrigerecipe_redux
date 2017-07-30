import { List, Record } from 'immutable';
import { saveRecipesActions } from './actions';


export const InitialState = new Record({
  filter: '',
  items: new List()
});


export function saveRecipesReducer(state = new InitialState(), {payload, type}) {
  switch (type) {
    case saveRecipesActions.CREATE_ITEM_FULFILLED:
      return state.set('items', state.items.unshift(payload.item));

    case saveRecipesActions.FILTER_ITEMS:
      return state.set('filter', payload.filterType || '');

    case saveRecipesActions.LOAD_ITEMS_FULFILLED:
      return state.set('items', new List(payload.items.reverse()));

    case saveRecipesActions.REMOVE_ITEM_FULFILLED:
      return state.set('items', state.items.filter(item => {
        return item.key !== payload.item.key;
      }));

    case saveRecipesActions.UPDATE_ITEM_FULFILLED:
      return state.set('items', state.items.map(item => {
        return item.key === payload.item.key ? payload.item : item;
      }));

    default:
      return state;
  }
}
