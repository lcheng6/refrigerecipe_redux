import { List, Record } from 'immutable';
import { fridgeActions } from './actions';


export const InitialState = new Record({
  filter: '',
  items: new List()
});


//Typical React Redux paradigm, the {payload, type} is the action described in ./actions.js
//action.js's definition of action is {payload: playload, type: type}.  In ES 2016 grammar, it's {payload, type}
export function fridgeReducer(state = new InitialState(), {payload, type}) {
  switch (type) {
    case fridgeActions.CREATE_ITEM_FULFILLED:
      return state.set('items', state.items.unshift(payload.item));

    case fridgeActions.FILTER_ITEMS:
      return state.set('filter', payload.filterType || '');

    case fridgeActions.LOAD_ITEMS_FULFILLED:
      return state.set('items', new List(payload.items.reverse()));

    case fridgeActions.REMOVE_ITEM_FULFILLED:
      return state.set('items', state.items.filter(item => {
        return item.key !== payload.item.key;
      }));

    case fridgeActions.UPDATE_ITEM_FULFILLED:
      return state.set('items', state.items.map(item => {
        return item.key === payload.item.key ? payload.item : item;
      }));

    default:
      return state;
  }
}
