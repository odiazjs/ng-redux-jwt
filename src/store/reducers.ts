import { loginReducer } from './reducers/login.reducer'
import { Reducer, AnyAction } from 'redux';
import { PersistedState } from 'redux-persist/es/types';

export const rootReducer: any = {
  login: loginReducer
}
