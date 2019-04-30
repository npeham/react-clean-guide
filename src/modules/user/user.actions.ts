import { createAction, Action } from 'deox';

export type User = {
  firstName: string;
  lastName: string;
};

// https://redux.js.org/advanced/async-actions choose!
export enum ActionTypeKeys {
  CreateUserRequested = 'USER::CREATE_REQUESTED',
  CreateUserFailed = 'USER::CREATE_FAILED',
  CreateUserSucceeded = 'USER::CREATE_SUCCEEDED',
  CreateUser = 'USER::CREATE',
}

export const createUser = createAction(
  ActionTypeKeys.CreateUser,
  resolve => (user: User) => resolve(user),
);

export type CreateUserRequestedAction = Action<
  ActionTypeKeys.CreateUserRequested
> & {
  payload: User;
};

export const createUserRequested = createAction(
  ActionTypeKeys.CreateUserRequested,
  resolve => (user: User) => resolve(user),
);

export const createUserSucceeded = createAction(
  ActionTypeKeys.CreateUserSucceeded,
  resolve => (user: User) => resolve(user),
);

export const createUserFailed = createAction(ActionTypeKeys.CreateUserFailed);
