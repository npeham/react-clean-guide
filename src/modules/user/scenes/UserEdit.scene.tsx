import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { SceneParams } from '../../../shared/types/routing';

export interface UserEditSceneParams extends SceneParams {
  userId: string;
  projId: string;
}

export const UserEditSene = (
  props: RouteComponentProps<UserEditSceneParams>,
) => (
  <div>
    user edit --> userId: {props.match.params.userId} and{' '}
    {props.match.params.projId}
  </div>
);
