// tslint:disable-next-line:import-name
import React, { useCallback } from 'react';

import { ApplicationState } from '../../../../../configureStore';
import { UserEditForm } from './UserEditForm';
import {
  User,
  createUser,
  createUserRequested,
  createUserSucceeded,
} from '../../../user.actions';
// tslint:disable-next-line:import-name
// import React, { useCallback } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

// const { useCallback } = React;

type UserEditFormContainerStateMapProps = {
  user: User;
};

type RegisterFormContainerProps = {
  passedProp: string;
};

export const UserEditFormContainer: React.FunctionComponent<
  RegisterFormContainerProps
> = ({ passedProp }) => {
  const mapState = useCallback(
    (state: ApplicationState): UserEditFormContainerStateMapProps => ({
      user: state.userState.user,
    }),
    [],
  );
  const dispatch = useDispatch();

  const { user } = useMappedState(mapState);

  const handleRegisterFormSubmit = (values: User) => {
    dispatch(createUserRequested(user));
  };

  return (
    <>
      <div>passed: {passedProp}</div>
      <div>user in state: {JSON.stringify(user)}</div>
      <br />
      <br />
      <UserEditForm onSubmit={handleRegisterFormSubmit} />{' '}
    </>
  );
};
