import { eventChannel } from 'redux-saga';
import { call, cancel, fork, put, take } from 'redux-saga/effects';
import { authActions } from 'core/auth';
import { ingredientActions } from './actions';
import { ingredientList } from './ingredient-list';


function subscribe() {
  return eventChannel(emit => ingredientList.subscribe(emit));
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

const createIngredient = write.bind(null, ingredientList, ingredientList.push, ingredientActions.createIngredientFailed);
const removeIngredient = write.bind(null, ingredientList, ingredientList.remove, ingredientActions.removeIngredientFailed);


//=====================================
//  WATCHERS
//-------------------------------------

function* watchAuthentication() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN_FULFILLED);

    ingredientList.path = `fridge/${payload.authUser.uid}`;
    const job = yield fork(read);

    yield take([authActions.SIGN_OUT_FULFILLED]);
    yield cancel(job);
  }
}

function* watchCreateIngredient() {
  while (true) {
    let { payload } = yield take(ingredientActions.CREATE_INGREDIENT);
    yield fork(createIngredient, payload.item);
  }
}

function* watchRemoveIngredient() {
  while (true) {
    let { payload } = yield take(ingredientActions.REMOVE_INGREDIENT);
    yield fork(removeIngredient, payload.item.key);
  }
}


//=====================================
//  TASK SAGAS
//-------------------------------------

export const ingredientsSagas = [
  fork(watchAuthentication),
  fork(watchCreateIngredient),
  fork(watchRemoveIngredient),
];
