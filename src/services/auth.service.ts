import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/throw'
import { JwtInfo } from 'src/store/types';
import { LogInModel } from 'src/models/login.model';
import { config } from 'src/config';
import configFile from 'src/config.file';

@Injectable()
export class AuthService {
    constructor ( private http: Http ) { }
    login ( loginModel: LogInModel ): Observable<JwtInfo> {
        const { protocol,  urlConfig: { baseUrl, version, loginEndpoint } } = config(configFile)
        const loginUrl = `${protocol}://${baseUrl}/${version}/${loginEndpoint}`
        return this.http.post( loginUrl, loginModel )
            .catch( ( err ) => {
                return Observable.of(err)
            } )
            .map( ( response: any ) => {
                // add your own jwt decode implementation
                // and/or error mapping/handling here
                return response.json()
            } )
    }
}
