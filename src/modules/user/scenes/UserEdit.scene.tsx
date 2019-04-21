import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { SceneParams } from '../../../shared/types/routing';

export interface UserEditSceneParams extends SceneParams {
  userId: string;
  projId: string;
}

export const userEditSceneDefaultParams: UserEditSceneParams = {
  projId: '',
  userId: '',
};

export const UserEditSene = (
  props: RouteComponentProps<UserEditSceneParams>,
) => (
  <div>
    <span>userId --> {props.match.params.userId}</span>
    <br />
    <span>projId --> {props.match.params.projId}</span>
  </div>
);
