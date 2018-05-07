import { LoginState, LOGIN_INITIAL_STATE, AUTH_INITIAL_STATE } from './reducers/login.reducer'

export interface AppState {
  login: LoginState
}

export const InitialState: AppState = {
  login: {
      authInfo: AUTH_INITIAL_STATE,
      authenticated: LOGIN_INITIAL_STATE.authenticated
  }
}
