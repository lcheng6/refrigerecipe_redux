// import { List, Record } from 'immutable'
import {
  SIGN_UP_PENDING,
  SIGN_UP_REJECTED,
  SIGN_UP_FULFILLED
} from './actions'

export const initialState = {
  response: null,
  fetching: false,
  fetched: false,
  error: null
}

export function signUpReducer(state = initialState, action) {
  console.log('action received', action)
  switch (action.type) {
    case SIGN_UP_PENDING:
      return Object.assign({}, state, {
        fetching: true
      })

    case SIGN_UP_REJECTED:
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      })

    case SIGN_UP_FULFILLED:
    console.log(action.payload)
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        response: action.payload
      })

    default:
      return state
  }
}
