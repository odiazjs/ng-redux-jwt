import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { JwtInfo } from 'src/store/types';

import configFile from 'src/config.file';
import { config } from 'src/config';

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
