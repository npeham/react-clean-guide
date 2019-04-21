import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { SceneParams, AppRoute, IScene } from '../../../shared/types/routing';
import { UserRoute } from '../user.routing';

export interface UserEditSceneParams extends SceneParams {
  userId: string;
  projId: string;
}

export const userEditSceneDefaultParams: UserEditSceneParams = {
  projId: '',
  userId: '',
};

export const UserEditScene = (
  props: RouteComponentProps<UserEditSceneParams>,
) => {
  const { userId, projId } = props.match.params;
  return (
    <div>
      <span>userId --> {userId}</span>
      <br />
      <span>projId --> {projId}</span>
    </div>
  );
};

export interface UserEditScene extends IScene<UserRoute.Edit> {
  params: UserEditSceneParams;
}

export const userEditRoute: AppRoute = {
  scene: {
    path: UserRoute.Edit,
    params: userEditSceneDefaultParams,
  },
  component: UserEditScene,
};
