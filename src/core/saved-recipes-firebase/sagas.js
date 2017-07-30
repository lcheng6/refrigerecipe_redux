import { LOCATION_CHANGE } from 'react-router-redux';
import { eventChannel } from 'redux-saga';
import { call, cancel, fork, put, take } from 'redux-saga/effects';
import { authActions } from 'src/core/auth';
import { saveRecipesActions } from './actions';
import { savedRecipesList } from './saved-recipes-list'; // firebase list


function subscribe() {
  return eventChannel(emit => saveRecipesList.subscribe(emit));
}

function* read() {
  const channel = yield call(subscribe);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(context, method, onError, ...params) {
  try {
    yield call([context, method], ...params);
  }
  catch (error) {
    yield put(onError(error));
  }
}

const createItem = write.bind(null, saveRecipesList, saveRecipesList.push, saveRecipesActions.createItemFailed);
const removeItem = write.bind(null, saveRecipesList, saveRecipesList.remove, saveRecipesActions.removeItemFailed);
const updateItem = write.bind(null, saveRecipesList, saveRecipesList.update, saveRecipesActions.updateItemFailed);


//=====================================
//  WATCHERS
//-------------------------------------

function* watchAuthentication() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN_FULFILLED);

    saveRecipesList.path = `saveRecipes/${payload.authUser.uid}`;
    console.log("saveRecipesList.path " + saveRecipesList.path)
    const job = yield fork(read);

    yield take([authActions.SIGN_OUT_FULFILLED]);
    yield cancel(job);
  }
}

function* watchCreateItem() {
  while (true) {
    let { payload } = yield take(saveRecipesActions.CREATE_ITEM);
    yield fork(createItem, payload.item);
  }
}

function* watchLocationChange() {
  while (true) {
    let { payload } = yield take(LOCATION_CHANGE);
    if (payload.pathname === '/') {
      const params = new URLSearchParams(payload.search);
      const filter = params.get('filter');
      yield put(saveRecipesActions.filterItems(filter));
    }
  }
}

function* watchRemoveItem() {
  while (true) {
    let { payload } = yield take(saveRecipesActions.REMOVE_ITEM);
    yield fork(removeItem, payload.item.key);
  }
}

function* watchUpdateItem() {
  while (true) {
    let { payload } = yield take(saveRecipesActions.UPDATE_ITEM);
    yield fork(updateItem, payload.item.key, payload.changes);
  }
}


//=====================================
//  ITEM SAGAS
//-------------------------------------

export const saveRecipesSagas = [
  fork(watchAuthentication),
  fork(watchCreateItem),
  fork(watchLocationChange),
  fork(watchRemoveItem),
  fork(watchUpdateItem)
];
