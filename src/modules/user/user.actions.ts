import { Action } from 'redux';

export type User = {
  firstName: string;
  lastName: string;
};

enum ActionTypeKeys {
  CreateUser = 'USER::CREATE',
}

interface CreateUserAction extends Action<ActionTypeKeys.CreateUser> {
  payload: User;
}

export const createUser = (user: User): CreateUserAction => ({
  type: ActionTypeKeys.CreateUser,
  payload: user,
});

export { ActionTypeKeys };

export type UserActions = CreateUserAction;
