# ngrx-jwt-auth
An angular 2 JSON Web Token handling login authentication with Redux flow architecture, simply ready to be bind into any custom UI component.

## A sample login form
It already comes with a basic HTML Login form with a LoginModel bidned to it.
```
<div class="container">
  <div>Username</div>
  <input type="text" placeholder="username" [(ngModel)]="model.username" />
  <div>Password</div>
  <input type="password" placeholder="password" [(ngModel)]="model.password" />
  <div class="container">
    <input type="button" value="Login" (click)="login()"/>
  </div>
</div>
```

## Setup a config file
Simply replace the configuration properties with your API/backend.
```
export default {
    "protocol": "https",
    "scheme": "Bearer",
    "urlConfig": {
        "version": "v1",
        "baseUrl": "fluyo.ngrok.io/api",
        "loginEndpoint": "auth/token",
        "logoutEndpoint": "auth/logout",
        "refreshTokenEndpoint": "auth/refresh"
    }
}
```

## This is Epic!
A login epic ready to go!
```
login = (action$: any, store: any): Observable<Action> => {
    return action$.ofType(LoginActions.LOGIN)
      .concatMap((result: ReduxAction<LogInModel>) => {
        const { payload } = result
        return this.authService.login(payload)
            .map((jwtInfo: JwtInfo) => {
                return LoginActions.success(jwtInfo)
            })
      })
  }
  ```

## Token Interceptor
A ready to be used Token Interceptor that adds the token to every http request, it knows
how to go and get the token from the redux login store.
```
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    @select( 'login' )
    loginStore: Observable<JwtInfo>
    intercept ( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        this.loginStore.subscribe( ( jwtInfo: JwtInfo ) => {
            const { token } = jwtInfo
            const authConfig = config( configFile )
            request = request.clone( {
                setHeaders: {
                    Authorization: `${ authConfig.scheme } ${ token }`
                }
            } )
        } )
        return next.handle( request );
    }
}
```