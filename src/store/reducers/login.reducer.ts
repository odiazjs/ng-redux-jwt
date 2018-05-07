import { Reducer, AnyAction } from 'redux'
import { LoginActions } from '../actions/login.actions'

export interface AuthInfo {
    token: string
    username: string
    expired: () => boolean | null
    expires: number
}
export interface LoginState {
    authInfo: AuthInfo
    authenticated: boolean
}
export const LOGIN_INITIAL_STATE = {
    authenticated: false
}
export const AUTH_INITIAL_STATE = {
    token: '',
    username: '',
    expired: null,
    expires: 0
}
export const loginReducer: Reducer<LoginState> = (
    state: LoginState = { authInfo: AUTH_INITIAL_STATE, authenticated: LOGIN_INITIAL_STATE.authenticated },
    action: AnyAction
): LoginState => {
    switch ( action.type ) {
        case LoginActions.LOGIN:
            return { ...state, authenticated: false }
        case LoginActions.LOGIN_SUCCESS:
            return { ...state, authenticated: true, authInfo: action.payload }
        case LoginActions.LOGIN_FAIL:
            return { ...state, authenticated: false, authInfo: AUTH_INITIAL_STATE }
        case LoginActions.LOGOUT:
            return { ...state, authenticated: false, authInfo: AUTH_INITIAL_STATE }
        default:
            return state
    }
}
