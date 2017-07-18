import { List, Record } from 'immutable'
import {
  FETCH_RECIPES_PENDING,
  FETCH_RECIPES_REJECTED,
  FETCH_RECIPES_FULFILLED
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
    case FETCH_RECIPES_PENDING:
      return state.merge({
        fetching: true
      })

    case FETCH_RECIPES_REJECTED:
      return state.merge({
        fetching: false,
        error: action.payload
      })

    case FETCH_RECIPES_FULFILLED:
      return state.merge({
        fetching: false,
        fetched: true,
        recipes: action.payload.data
      })

    default:
      return state
  }
}
