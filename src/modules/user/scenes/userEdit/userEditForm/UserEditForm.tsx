import * as React from 'react';
import { User } from '../../../user.actions';

type UserEditFormProps = {
  onSubmit: (userEdited: User) => void;
};

export const UserEditForm: React.SFC<UserEditFormProps> = ({ onSubmit }) => {
  const userEdited: User = {
    firstName: 'susan',
    lastName: 'jackson',
  };

  const onUserEdited = () => onSubmit(userEdited);
  return (
    <>
      <button onClick={onUserEdited}>update state</button>
    </>
  );
};
