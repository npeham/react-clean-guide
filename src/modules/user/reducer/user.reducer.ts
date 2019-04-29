import { User, createUser, createUserSucceeded } from '../user.actions';
import { createReducer } from 'deox';

export interface UserState {
  user: User;
}

const userDefaultState: UserState = {
  user: {
    firstName: 'john',
    lastName: 'doe',
  },
};

export const userReducer = createReducer(userDefaultState, handle => [
  handle(createUserSucceeded, (state, action) => {
    return { ...state, user: action.payload };
  }),
]);
