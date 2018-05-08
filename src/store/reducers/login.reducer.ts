import { Reducer, AnyAction } from 'redux'
import { LoginActions } from '../actions/login.actions'
import { JwtInfo } from '../types'

export interface LoginState {
    jwtInfo: JwtInfo
    authenticated: boolean
}
export const AUTH_INITIAL_STATE = {
    authenticated: false
}
export const JWT_INITIAL_STATE = {
    token: '',
    username: '',
    expired: null,
    expires: 0
}
export const loginReducer: Reducer<LoginState> = (
    state: LoginState = { jwtInfo: JWT_INITIAL_STATE, authenticated: AUTH_INITIAL_STATE.authenticated },
    action: AnyAction
): LoginState => {
    switch ( action.type ) {
        case LoginActions.LOGIN:
            return { ...state, authenticated: false }
        case LoginActions.LOGIN_SUCCESS:
            return { ...state, authenticated: true, jwtInfo: action.payload }
        case LoginActions.LOGIN_FAIL:
            return { ...state, authenticated: false, jwtInfo: JWT_INITIAL_STATE }
        case LoginActions.LOGOUT:
            return { ...state, authenticated: false, jwtInfo: JWT_INITIAL_STATE }
        default:
            return state
    }
}
