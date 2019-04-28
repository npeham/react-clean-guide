import { createAction } from 'deox';

export type User = {
  firstName: string;
  lastName: string;
};

enum ActionTypeKeys {
  CreateUser = 'USER::CREATE',
}

export const createUser = createAction(
  'USER::CREATE',
  resolve => (user: User) => resolve(user),
);
