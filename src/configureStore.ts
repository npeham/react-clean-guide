import { createStore, Dispatch, applyMiddleware } from 'redux';

import { rootReducer } from './rootReducer';
import { UserState } from './modules/user/reducer/user.reducer';
import { default as createSagaMiddleware } from '@redux-saga/core';
import rootSaga from './rootSaga';

export interface ConnectedReduxProps {
  dispatch: Dispatch;
}

export interface ApplicationState {
  userState: UserState;
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
