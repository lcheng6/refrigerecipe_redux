// this is an important part... the api...
import signUpAPI from '../api/signUpAPI'
// ... implements redux-promise-middleware,
// so the rest of the FETCH_RECIPES cases are appended
import {
  SIGNUP_REQUEST
} from './constants'

import axios from 'axios'

export function signUp({ email, password, phone }) {
  return {
    type:SIGNUP_REQUEST,
    payload: signUpRequest({ email, password, phone })
  }
}
