import { UserListScene } from './scenes/UserList.scene';
import { AppRoute, IScene } from '../../shared/types/routing';
import {
  UserEditSene,
  UserEditSceneParams,
} from './scenes/userEdit/UserEdit.scene';

export enum UserRoute {
  List = '/user/list',
  Edit = '/user/edit/:userId/:projId',
}

export const userRoutes: AppRoute[] = [
  {
    path: UserRoute.Edit,
    component: UserEditSene,
  },
  {
    path: UserRoute.List,
    component: UserListScene,
  },
];

export interface UserEditScene extends IScene<UserRoute.Edit> {
  params: UserEditSceneParams;
}

export interface UserListScene extends IScene<UserRoute.List> {
  params?: never;
}

export type UserScenes = UserEditScene | UserListScene;
