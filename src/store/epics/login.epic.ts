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
import { ReduxAction, JwtInfo } from 'src/store/types';
import { LogInModel } from 'src/models/login.model';
import { AuthService } from 'src/services/auth.service';

@Injectable()
export class LoginEpics {
  constructor(private authService: AuthService) {}

  createEpics() {
    return [createEpicMiddleware(this.login)]
  }

  login = (action$: any, store: any): Observable<Action> => {
    return action$
      .ofType(LoginActions.LOGIN)
      .flatMap((result: ReduxAction<LogInModel>) => {
        const { payload } = result
        return this.authService.login(payload)
            .map((jwtInfo: JwtInfo) => {
                return LoginActions.success(jwtInfo)
            })
      })
  }
}
