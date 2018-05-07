import { select } from '@angular-redux/store'
import { Injectable } from '@angular/core'
import { createEpicMiddleware } from 'redux-observable'

import { Action } from 'redux'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/concat'
import 'rxjs/add/operator/concatMap'
import 'rxjs/add/observable/fromPromise'

import { LoginActions } from '../actions/login.actions'

@Injectable()
export class LoginEpics {
  constructor() {}

  createEpics() {
    return [createEpicMiddleware(this.login)]
  }

  login = (action$: any, store: any): Observable<Action> => {
    return action$
      .ofType(LoginActions.LOGIN)
      .map(() => {
          
      })
  }
}
