import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface UserEditSceneParams {
  userId: string;
  projId: string;
}

export const UserEditSene = (
  props: RouteComponentProps<UserEditSceneParams>,
) => {
  return (
    <div>
      user edit --> userId: {props.match.params.userId} and{' '}
      {props.match.params.projId}
    </div>
  );
};
