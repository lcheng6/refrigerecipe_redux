import { all } from 'redux-saga/effects'
import { authSagas } from './auth';
import { ingredientsSagas } from './ingredients';


export default function* sagas() {
  yield all([
    ...authSagas,
    ...ingredientsSagas
  ]);
}
