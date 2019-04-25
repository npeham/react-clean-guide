import { Reducer } from 'redux';
import { UserActions, ActionTypeKeys, User } from '../user.actions';

export interface UserState {
  user: User;
}

const userDefaultState: UserState = {
  user: {
    firstName: 'john',
    lastName: 'doe',
  },
};

export const userReducer: Reducer<UserState, UserActions> = (
  state = userDefaultState,
  action,
) => {
  switch (action.type) {
    case ActionTypeKeys.CreateUser:
      return { ...state, userStatus: action.payload };
    default:
      return state;
  }
};
