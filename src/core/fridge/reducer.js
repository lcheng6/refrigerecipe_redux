// import { List, Record } from 'immutable'
import { fridgeActions } from './actions'

export const initialState = {
  response: null,
  fetching: false,
  fetched: false,
  error: null
}

export function fridgeReducer(state = initialState, action) {
  console.log('action received', action)
  switch (action.type) {
    case fridgeActions.FRIDGE_LOAD_PENDING:
      return Object.assign({}, state, {
        fetching: true
      })

    case fridgeActions.FRIDGE_LOAD_REJECTED:
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      })

    case fridgeActions.FRIDGE_LOAD_FULFILLED:
    console.log(action.payload)
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        response: action.payload
      })


    case fridgeActions.FRIDGE_UPDATE_PENDING:
      return Object.assign({}, state, {
        fetching: true
      })

    case fridgeActions.FRIDGE_UPDATE_REJECTED:
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      })

    case fridgeActions.FRIDGE_UPDATE_FULFILLED:
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
