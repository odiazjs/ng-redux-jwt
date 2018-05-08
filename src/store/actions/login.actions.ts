import { Injectable } from '@angular/core'
import { JwtInfo, ReduxAction } from '../types';
import { LogInModel } from 'src/models/login.model';

@Injectable()
export class LoginActions {
  static readonly LOGIN = 'LOGIN/LOGIN'
  static readonly LOGIN_SUCCESS = 'LOGIN/LOGIN_SUCCESS'
  static readonly LOGIN_FAIL = 'LOGIN/LOGIN_FAIL'
  static readonly LOGOUT = 'LOGIN/LOGOUT'

  static login ( model: LogInModel ): ReduxAction<LogInModel> {
    return {
      type: LoginActions.LOGIN,
      payload: model
    }
  }
  static success ( jwtInfo: JwtInfo ): ReduxAction<JwtInfo> {
    return {
      type: LoginActions.LOGIN_SUCCESS,
      payload: jwtInfo
    }
  }
  static failed ( error: any ): ReduxAction<LogInModel> {
    return {
      type: LoginActions.LOGIN_FAIL,
      payload: new LogInModel()
    }
  }
}
