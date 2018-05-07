import { Injectable } from '@angular/core'

@Injectable()
export class LoginActions {
  static readonly LOGIN = 'LOGIN/LOGIN'
  static readonly LOGIN_SUCCESS = 'LOGIN/LOGIN_SUCCESS'
  static readonly LOGIN_FAIL = 'LOGIN/LOGIN_FAIL'
  static readonly LOGOUT = 'LOGIN/LOGOUT'
}
