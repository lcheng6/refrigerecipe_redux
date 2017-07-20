import signUpRequest from '../api/signUpAPI'

export const SIGN_UP_PENDING = "SIGN_UP_PENDING"
export const SIGN_UP_REJECTED = "SIGN_UP_REJECTED"
export const SIGN_UP_FULFILLED = "SIGN_UP_FULFILLED"
export const SIGN_UP = "SIGN_UP"

export function signUp({ email, password, phone }) {
  return {
    type:SIGN_UP,
    payload: signUpRequest({ email, password, phone })
  }
}
