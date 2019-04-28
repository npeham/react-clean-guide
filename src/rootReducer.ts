import { combineReducers } from 'redux';
import { userReducer } from './modules/user/reducer/user.reducer';

export const rootReducer = combineReducers({ userState: userReducer });
