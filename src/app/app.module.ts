import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// store
import { StoreModule } from '../store/module'
import { LoginEpics } from '../store/epics/login.epic';
import { LoginActions } from '../store/actions/login.actions';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/services/token.interceptor';
import { AuthService } from 'src/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

const APP_COMMON_MODULES = [
  BrowserModule,
  FormsModule,
  HttpClientModule,
  StoreModule
]

@NgModule( {
  declarations: [AppComponent],
  imports: [...APP_COMMON_MODULES],
  providers: [
    LoginEpics,
    LoginActions,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
