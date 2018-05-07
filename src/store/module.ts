import { NgModule } from '@angular/core'
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store'

// The top-level reducers and epics that make up our app's logic.
import { AppState, InitialState } from './model'
import { rootReducer } from './reducers'
import { Epics } from './epics'

// redux persist
import { persistStore, persistCombineReducers, PersistorOptions, PersistedState } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const STORE_VERSION = 1
@NgModule( {
    imports: [ NgReduxModule ],
    exports: [ NgReduxModule ],
    providers: [ Epics ]
} )
export class StoreModule {
    constructor ( ngRedux: NgRedux<AppState>, devTools: DevToolsExtension, epics: Epics ) {
        const config = { key: 'jwt-auth-sdk', storage, blacklist: [], version: STORE_VERSION }
        const persistedReducer: any = persistCombineReducers(config, rootReducer)
        ngRedux.configureStore(
            persistedReducer,
            InitialState,
            [ ...epics.createEpics() ]
        )
        persistStore( ngRedux )
    }
}
