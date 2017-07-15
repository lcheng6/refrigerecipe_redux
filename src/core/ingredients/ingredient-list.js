import { FirebaseList } from 'core/firebase';
import { ingredientActions } from './actions';
import { Ingredient } from './ingredient';



export const ingredientList = new FirebaseList({
  onAdd: ingredientActions.createIngredientFulfilled,
  onLoad: ingredientActions.loadIngredientsFulfilled,
  onRemove: ingredientActions.removeIngredientFulfilled
}, Ingredient);
