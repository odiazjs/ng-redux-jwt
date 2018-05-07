import { Component } from '@angular/core';
import { dispatch, select } from '@angular-redux/store';
import { LoginActions } from 'src/store/actions/login.actions';
import { Observable } from 'rxjs/internal/Observable';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
  title = 'Ng redux JWT Auth';
  model = {
    username: '',
    password: ''
  }
  @select('loginDetails')
  loginDetails: Observable<any>

  constructor () {}

  login () {
    this.startLogin(this.model)
  }

  @dispatch()
  startLogin(model: {username: string, password: string}) {
    return {
      type: LoginActions.LOGIN,
      payload: model
    }
  }
}
