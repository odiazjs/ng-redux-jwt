import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// store
import { StoreModule } from '../store/module'
import { LoginEpics } from '../store/epics/login.epic';
import { LoginActions } from '../store/actions/login.actions';

const APP_COMMON_MODULES = [
  BrowserModule,
  FormsModule,
  HttpModule,
  StoreModule
]

@NgModule( {
  declarations: [AppComponent],
  imports: [...APP_COMMON_MODULES],
  providers: [LoginEpics, LoginActions],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
