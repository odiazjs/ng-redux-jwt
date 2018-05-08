// angular
import { Injectable } from '@angular/core'

// redux
import { Action, ActionCreator } from 'redux'
import { select } from '@angular-redux/store'
import { createEpicMiddleware } from 'redux-observable'

// rxjs
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/concat'
import 'rxjs/add/operator/concatMap'
import 'rxjs/add/observable/fromPromise'

// app
import { LoginActions } from '../actions/login.actions'
import { ReduxAction } from 'src/store/types';
import { LogInModel } from 'src/models/login.model';

@Injectable()
export class LoginEpics {
  constructor() {}

  createEpics() {
    return [createEpicMiddleware(this.login)]
  }

  login = (action$: any, store: any): Observable<Action> => {
    return action$
      .ofType(LoginActions.LOGIN)
      .map((result: ReduxAction<LogInModel>) => {
        console.log(result)
        return LoginActions.success(null)
      })
  }
}
