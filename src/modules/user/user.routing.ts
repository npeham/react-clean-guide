import {
  UserEditSene,
  UserEditSceneParams,
  userEditSceneDefaultParams,
} from './scenes/UserEdit.scene';
import { UserListScene } from './scenes/UserList.scene';
import { AppRoute, IScene } from '../../shared/types/routing';

export enum UserRoute {
  List = '/user/list',
  Edit = '/user/edit',
  Show = '/user/show',
}

export interface UserEditScene extends IScene<UserRoute.Edit> {
  params: UserEditSceneParams;
}

export interface UserListScene extends IScene<UserRoute.List> {
  params?: never;
}

const userEditRoute: AppRoute = {
  scene: {
    path: UserRoute.Edit,
    params: userEditSceneDefaultParams,
  },
  component: UserEditSene,
};

const userListScene: AppRoute = {
  scene: {
    path: UserRoute.List,
  },
  component: UserListScene,
};

export const userRoutes: AppRoute[] = [userEditRoute, userListScene];

export type UserScenes = UserEditScene | UserListScene;
