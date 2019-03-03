import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface UserEditSceneParams {
  userId: string;
}

export const UserEditSene = (
  props: RouteComponentProps<UserEditSceneParams>,
) => {
  return <div>user edit --> userId: {props.match.params.userId}</div>;
};
