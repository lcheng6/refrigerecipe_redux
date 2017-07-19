import { List, Record } from 'immutable'
import {
  SIGNUP_REQUEST_PENDING,
  SIGNUP_REQUEST_REJECTED,
  SIGNUP_REQUEST_FULFILLED
} from './constants'

export const RecipesState = new Record({
  recipes: new List(),
  fetching: false,
  fetched: false,
  error: null
})

export function getRecipesReducer(state = new RecipesState(), action) {
  console.log('action received', action)
  switch (action.type) {
    case SIGNUP_REQUEST_PENDING:
      return state.merge({
        fetching: true
      })

    case SIGNUP_REQUEST_REJECTED:
      return state.merge({
        fetching: false,
        error: action.payload
      })

    case SIGNUP_REQUEST_FULFILLED:
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
