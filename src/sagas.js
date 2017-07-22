import { all } from 'redux-saga/effects'
import { authSagas } from './core/auth'
import { fridgeSagas } from './core/fridge';



export default function* sagas() {
  yield all([
    ...authSagas,
    ...fridgeSagas
  ]);
}
