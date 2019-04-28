import { User } from './user.actions';

export const userEditRequest = async (user: User): Promise<User> => {
  const fetchedUser: User = { firstName: 'ie', lastName: 'sei' };
  return fetchedUser;
};
