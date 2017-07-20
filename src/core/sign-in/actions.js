// this is an important part... the api...
import signInRequest from '../api/signInAPI'
// ... implements redux-promise-middleware,
// so the rest of the FETCH_RECIPES cases are appended
export const SIGN_IN_PENDING = "SIGN_IN_PENDING"
export const SIGN_IN_REJECTED = "SIGN_IN_REJECTED"
export const SIGN_IN_FULFILLED = "SIGN_IN_FULFILLED"
const SIGN_IN = "SIGN_IN"

export function signIn({ email, password, phone }) {
  return {
    type:SIGN_IN,
    payload: signInRequest({ email, password, phone })
  }
}
