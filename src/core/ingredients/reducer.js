import { List, Record } from 'immutable';
import { ingredientActions } from './actions';


export const IngredientsState = new Record({
  list: new List()
});


export function ingredientsReducer(state = new IngredientsState(), {payload, type}) {
  switch (type) {
    case ingredientActions.CREATE_INGREDIENT_FULFILLED:
      return state.set('list', state.list.unshift(payload.ingredient));

    case ingredientActions.LOAD_INGREDIENTS_FULFILLED:
      return state.set('list', new List(payload.ingredients.reverse()));

    case ingredientActions.REMOVE_INGREDIENT_FULFILLED:
      return state.set('list', state.list.filter(item => {
        return item.key !== payload.item.key;
      }));

    default:
      return state;
  }
}
