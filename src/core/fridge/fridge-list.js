import { FirebaseList } from 'src/core/firebase';
import { fridgeActions } from './actions';
import { Item } from './item';

export const fridgeList = new FirebaseList({
  onAdd: fridgeActions.createItemFulfilled,
  onChange: fridgeActions.updateItemFulfilled,
  onLoad: fridgeActions.loadItemsFulfilled,
  onRemove: fridgeActions.removeItemFulfilled
}, Item);
