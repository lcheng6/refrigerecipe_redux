import { LOCATION_CHANGE } from 'react-router-redux';
import { eventChannel } from 'redux-saga';
import { call, cancel, fork, put, take } from 'redux-saga/effects';
import { authActions } from 'src/core/auth';
import { fridgeActions } from './actions';
import { fridgeList } from './fridge-list'; // firebase list


function subscribe() {
  return eventChannel(emit => fridgeList.subscribe(emit));
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

const createItem = write.bind(null, fridgeList, fridgeList.push, fridgeActions.createItemFailed);
const removeItem = write.bind(null, fridgeList, fridgeList.remove, fridgeActions.removeItemFailed);
const updateItem = write.bind(null, fridgeList, fridgeList.update, fridgeActions.updateItemFailed);


//=====================================
//  WATCHERS
//-------------------------------------

function* watchAuthentication() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN_FULFILLED);

    fridgeList.path = `fridge/${payload.authUser.uid}`;
    console.log("fridgeList.path " + fridgeList.path)
    const job = yield fork(read);

    yield take([authActions.SIGN_OUT_FULFILLED]);
    yield cancel(job);
  }
}

function* watchCreateItem() {
  while (true) {
    let { payload } = yield take(fridgeActions.CREATE_ITEM);
    yield fork(createItem, payload.item);
  }
}

function* watchLocationChange() {
  while (true) {
    let { payload } = yield take(LOCATION_CHANGE);
    if (payload.pathname === '/') {
      const params = new URLSearchParams(payload.search);
      const filter = params.get('filter');
      yield put(fridgeActions.filterItems(filter));
    }
  }
}

function* watchRemoveItem() {
  while (true) {
    let { payload } = yield take(fridgeActions.REMOVE_ITEM);
    yield fork(removeItem, payload.item.key);
  }
}

function* watchUpdateItem() {
  while (true) {
    let { payload } = yield take(fridgeActions.UPDATE_ITEM);
    yield fork(updateItem, payload.item.key, payload.changes);
  }
}


//=====================================
//  ITEM SAGAS
//-------------------------------------

export const fridgeSagas = [
  fork(watchAuthentication),
  fork(watchCreateItem),
  fork(watchLocationChange),
  fork(watchRemoveItem)
  , fork(watchUpdateItem)
];
