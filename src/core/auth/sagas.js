import { call, fork, put, take } from 'redux-saga/effects';
import { push, replace } from 'connected-react-router'
import { firebaseAuth } from 'core/firebase';
import { authActions } from './actions';


function* signIn(authProvider) {
  try {
    const authData = yield call([firebaseAuth, firebaseAuth.signInWithPopup], authProvider);
    yield put(authActions.signInFulfilled(authData.user));
    yield put(push('/'))
  }
  catch (error) {
    yield put(authActions.signInFailed(error));
  }
}

function* signOut() {
  try {
    yield call([firebaseAuth, firebaseAuth.signOut]);
    yield put(authActions.signOutFulfilled());
    yield put(replace('/sign-in'))
  }
  catch (error) {
    yield put(authActions.signOutFailed(error));
  }
}


//=====================================
//  WATCHERS
//-------------------------------------

function* watchSignIn() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN);
    yield fork(signIn, payload.authProvider);
  }
}

function* watchSignOut() {
  while (true) {
    yield take(authActions.SIGN_OUT);
    yield fork(signOut);
  }
}


//=====================================
//  AUTH SAGAS
//-------------------------------------

export const authSagas = [
  fork(watchSignIn),
  fork(watchSignOut)
];
