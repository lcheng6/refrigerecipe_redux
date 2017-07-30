import { FirebaseList } from 'src/core/firebase';
import { saveRecipesActions } from './actions';
import { Item } from './item';

export const savedRecipesList = new FirebaseList({
  onAdd: saveRecipesActions.createItemFulfilled,
  onChange: saveRecipesActions.updateItemFulfilled,
  onLoad: saveRecipesActions.loadItemsFulfilled,
  onRemove: saveRecipesActions.removeItemFulfilled
}, Item);
