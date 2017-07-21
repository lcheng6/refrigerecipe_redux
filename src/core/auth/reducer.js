import { authActions } from './actions';


export const AuthState = {
  authenticated: false,
  uid: null,
  user: null
}


export function authReducer(state = AuthState, action) {
  switch (action.type) {
    case authActions.SIGN_IN_FULFILLED:
      return Object.assign({}, state, {
        authenticated: true,
        uid: action.payload.uid,
        user: action.payload
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
