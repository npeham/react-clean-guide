import { User } from './user.actions';

export const userEditRequest = async (user: User): Promise<User> => {
  const fetchedUser: User = { firstName: 'ie', lastName: 'sei' };
  return new Promise(resolve => setTimeout(() => resolve(fetchedUser), 1000));
};
