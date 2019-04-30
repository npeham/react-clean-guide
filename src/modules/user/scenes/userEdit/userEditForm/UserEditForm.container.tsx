import * as React from 'react';
import { connect } from 'react-redux';

import {
  ConnectedReduxProps,
  ApplicationState,
} from '../../../../../configureStore';
import { UserEditForm } from './UserEditForm';
import { User, createUser, createUserRequested } from '../../../user.actions';

type UserEditFormContainerStateMapProps = {
  user: User;
};

const mapStateToProps = (
  state: ApplicationState,
): UserEditFormContainerStateMapProps => {
  return {
    user: state.userState.user,
  };
};

type RegisterFormContainerProps = ConnectedReduxProps &
  UserEditFormContainerStateMapProps & {
    passedProp: string;
  };

export const UserEditFormContainer = connect(mapStateToProps)(
  ({ dispatch, user, passedProp }: RegisterFormContainerProps) => {
    const handleRegisterFormSubmit = (values: User) => {
      // access to values
      dispatch(createUserRequested(values));
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
  },
);
