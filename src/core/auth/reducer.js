import { authActions } from './actions';


export const AuthState = {
  authenticated: false,
  uid: null,
  user: null
}


export function authReducer(state = AuthState, {payload, type}) {
  switch (type) {
    case authActions.SIGN_IN_FULFILLED:
      return Object.assign({}, state, {
        authenticated: true,
        uid: payload.uid,
        user: payload
      });

    case authActions.SIGN_OUT_FULFILLED:
      return Object.assign({}, state, {
        authenticated: false,
        uid: null,
        user: null
      });

    default:
      return state;
  }
}
