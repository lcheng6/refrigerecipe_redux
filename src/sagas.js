import { all } from 'redux-saga/effects'
import { authSagas } from './core/auth'
import { fridgeSagas } from './core/fridge';
import { savedRecipesSagas } from './core/saved-recipes-firebase';



export default function* sagas() {
  yield all([
    ...authSagas,
    ...fridgeSagas,
    ...savedRecipesSagas
  ]);
}
