import { FirebaseList } from 'src/core/firebase';
import { saveRecipesActions } from './actions';
import { Item } from './item';

export const savedRecipesList = new FirebaseList({
  onAdd: savedRecipesActions.createItemFulfilled,
  onChange: savedRecipesActions.updateItemFulfilled,
  onLoad: savedRecipesActions.loadItemsFulfilled,
  onRemove: savedRecipesActions.removeItemFulfilled
}, Item);
