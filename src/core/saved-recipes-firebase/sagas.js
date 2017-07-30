import { LOCATION_CHANGE } from 'react-router-redux';
import { eventChannel } from 'redux-saga';
import { call, cancel, fork, put, take } from 'redux-saga/effects';
import { authActions } from 'src/core/auth';
import { savedRecipesActions } from './actions';
import { savedRecipesList } from './saved-recipes-list'; // firebase list


function subscribe() {
  return eventChannel(emit => savedRecipesList.subscribe(emit));
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

const createItem = write.bind(null, savedRecipesList, savedRecipesList.push, savedRecipesActions.createItemFailed);
const removeItem = write.bind(null, savedRecipesList, savedRecipesList.remove, savedRecipesActions.removeItemFailed);
const updateItem = write.bind(null, savedRecipesList, savedRecipesList.update, savedRecipesActions.updateItemFailed);


//=====================================
//  WATCHERS
//-------------------------------------

function* watchAuthentication() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN_FULFILLED);

    savedRecipesList.path = `savedRecipes/${payload.authUser.uid}`;
    console.log("savedRecipesList.path " + savedRecipesList.path)
    const job = yield fork(read);

    yield take([authActions.SIGN_OUT_FULFILLED]);
    yield cancel(job);
  }
}

function* watchCreateItem() {
  while (true) {
    let { payload } = yield take(savedRecipesActions.CREATE_ITEM);
    yield fork(createItem, payload.item);
  }
}

function* watchLocationChange() {
  while (true) {
    let { payload } = yield take(LOCATION_CHANGE);
    if (payload.pathname === '/') {
      const params = new URLSearchParams(payload.search);
      const filter = params.get('filter');
      yield put(savedRecipesActions.filterItems(filter));
    }
  }
}

function* watchRemoveItem() {
  while (true) {
    let { payload } = yield take(savedRecipesActions.REMOVE_ITEM);
    yield fork(removeItem, payload.item.key);
  }
}

function* watchUpdateItem() {
  while (true) {
    let { payload } = yield take(savedRecipesActions.UPDATE_ITEM);
    yield fork(updateItem, payload.item.key, payload.changes);
  }
}


//=====================================
//  ITEM SAGAS
//-------------------------------------

export const savedRecipesSagas = [
  fork(watchAuthentication),
  fork(watchCreateItem),
  fork(watchLocationChange),
  fork(watchRemoveItem),
  fork(watchUpdateItem)
];
