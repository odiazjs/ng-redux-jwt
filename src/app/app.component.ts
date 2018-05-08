import { Component } from '@angular/core';
import { dispatch, select } from '@angular-redux/store';
import { LoginActions } from '../store/actions/login.actions';
import { Observable } from 'rxjs/internal/Observable';
import { LogInModel } from '../models/login.model';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
  title = 'Ng redux JWT Auth';
  model = new LogInModel();

  login () {
    this.startLogin(this.model)
  }

  @dispatch()
  startLogin(model: LogInModel) {
    return LoginActions.login(model)
  }
}
