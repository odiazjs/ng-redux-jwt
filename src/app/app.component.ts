import { Component } from '@angular/core';
import { dispatch, select } from '@angular-redux/store';
import { LoginActions } from '../store/actions/login.actions';
import { Observable } from 'rxjs/internal/Observable';
import { LogInModel } from '../models/login.model';
import { JwtInfo } from 'src/store/types';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
  title = 'Ng redux JWT Auth';
  model = new LogInModel();

  @select('login')
  jwtInfo: Observable<JwtInfo>

  parseJwtInfo (): Observable<any> {
    return this.jwtInfo.map(result => JSON.stringify(result))
  }

  login () {
    this.startLogin(this.model)
  }

  @dispatch()
  startLogin(model: LogInModel) {
    return LoginActions.login(model)
  }
}
