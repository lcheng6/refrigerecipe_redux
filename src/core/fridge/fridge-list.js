import { FirebaseList } from 'src/core/firebase';
import { fridgeActions } from './actions';

const Item = {
  key: null,
  title: null
}

export const fridgeList = new FirebaseList({
  onAdd: fridgeActions.createItemFulfilled,
  onLoad: fridgeActions.loadItemsFulfilled,
  onRemove: fridgeActions.removeItemFulfilled
}, Item);
