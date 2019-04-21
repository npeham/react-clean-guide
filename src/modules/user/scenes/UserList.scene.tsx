import * as React from 'react';
import { IScene, AppRoute } from '../../../shared/types/routing';
import { UserRoute } from '../user.routing';
import { RouteComponentProps } from 'react-router';

export const UserListScene: React.SFC<RouteComponentProps> = props => {
  return <div>user list</div>;
};

export interface UserListScene extends IScene<UserRoute.List> {
  params?: never;
}

export const userListScene: AppRoute = {
  scene: {
    path: UserRoute.List,
  },
  component: UserListScene,
};
