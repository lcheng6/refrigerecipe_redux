import { all } from 'redux-saga/effects'
import { authSagas } from './core/auth';


export default function* sagas() {
  yield all([
    ...authSagas
  ]);
}
