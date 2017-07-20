import { List, Record } from 'immutable'
import {
  SIGN_IN_PENDING,
  SIGN_IN_REJECTED,
  SIGN_IN_FULFILLED
} from './actions'

export const RecipesState = new Record({
  recipes: new List(),
  fetching: false,
  fetched: false,
  error: null
})

export function getRecipesReducer(state = new RecipesState(), action) {
  console.log('action received', action)
  switch (action.type) {
    case SIGN_IN_PENDING:
      return state.merge({
        fetching: true
      })

    case SIGN_IN_REJECTED:
      return state.merge({
        fetching: false,
        error: action.payload
      })

    case SIGN_IN_FULFILLED:
      return state.merge({
        fetching: false,
        fetched: true,
        recipes: action.payload.data
      })

    default:
      return state
  }
}
//
// import {
//   SIGNUP_REQUEST
// } from './constants'
//
// import axios from 'axios'
//
// export function signUp({ email, password, phone }) {
//   return {
//     type:SIGNUP_REQUEST,
//     payload: signUpRequest({ email, password, phone })
//   }
// }
