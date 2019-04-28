import { createStore, Dispatch } from 'redux';

import { rootReducer } from './rootReducer';
import { UserState } from './modules/user/reducer/user.reducer';

export interface ConnectedReduxProps {
  dispatch: Dispatch;
}

export interface ApplicationState {
  userState: UserState;
}

export const store = createStore(rootReducer);
