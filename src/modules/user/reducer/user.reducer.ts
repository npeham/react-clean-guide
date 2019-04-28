import { User, createUser } from '../user.actions';
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
  handle(createUser, (state, action) => ({ ...state, user: action.payload })),
]);
