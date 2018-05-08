import { LoginState, JWT_INITIAL_STATE, AUTH_INITIAL_STATE } from './reducers/login.reducer'

export interface AppState {
  login: LoginState
}
export const InitialState: AppState = {
  login: {
      jwtInfo: JWT_INITIAL_STATE,
      authenticated: AUTH_INITIAL_STATE.authenticated
  }
}
