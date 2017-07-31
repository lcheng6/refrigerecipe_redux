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

const createRecipeDetail = write.bind(null, savedRecipesList, savedRecipesList.push, savedRecipesActions.createRecipeDetailFailed);
const removeRecipeDetail = write.bind(null, savedRecipesList, savedRecipesList.remove, savedRecipesActions.removeRecipeDetailFailed);
const updateRecipeDetail = write.bind(null, savedRecipesList, savedRecipesList.update, savedRecipesActions.updateRecipeDetailFailed);


//=====================================
//  WATCHERS
//-------------------------------------

function* watchAuthentication() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN_FULFILLED);

    savedRecipesList.path = `savedRecipes/${payload.authUser.uid}`;
    console.log("savedRecipesList.path " + savedRecipesList.path);
    const job = yield fork(read);

    yield take([authActions.SIGN_OUT_FULFILLED]);
    yield cancel(job);
  }
}

function* watchCreateRecipeDetail() {
  while (true) {
    let { payload } = yield take(savedRecipesActions.CREATE_RECIPE_DETAIL);
    yield fork(createRecipeDetail, payload.item);
  }
}

function* watchLocationChange() {
  while (true) {
    let { payload } = yield take(LOCATION_CHANGE);
    if (payload.pathname === '/saved-recipes') {
      const params = new URLSearchParams(payload.search);
      const filter = params.get('filter');
      yield put(savedRecipesActions.filterRecipeDetails(filter));
    }
  }
}

function* watchRemoveRecipeDetail() {
  while (true) {
    let { payload } = yield take(savedRecipesActions.REMOVE_RECIPE_DETAIL);
    yield fork(removeRecipeDetail, payload.item.key);
  }
}

function* watchUpdateRecipeDetail() {
  while (true) {
    let { payload } = yield take(savedRecipesActions.UPDATE_RECIPE_DETAIL);
    yield fork(updateRecipeDetail, payload.item.key, payload.changes);
  }
}


//=====================================
//  ITEM SAGAS
//-------------------------------------

export const savedRecipesSagas = [
  fork(watchAuthentication),
  fork(watchCreateRecipeDetail),
  fork(watchLocationChange),
  fork(watchRemoveRecipeDetail),
  fork(watchUpdateRecipeDetail)
];
