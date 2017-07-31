import { FirebaseList } from 'src/core/firebase';
import { savedRecipesActions } from './actions';
import { Item } from './item';

export const savedRecipesList = new FirebaseList({
  onAdd: savedRecipesActions.createRecipeDetailFulfilled,
  onChange: savedRecipesActions.updateRecipeDetailFulfilled,
  onLoad: savedRecipesActions.loadRecipeDetailsFulfilled,
  onRemove: savedRecipesActions.removeRecipeDetailFulfilled
}, Item);
