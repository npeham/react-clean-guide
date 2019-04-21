import { userEditRoute, UserEditScene } from './scenes/UserEdit.scene';
import { UserListScene, userListScene } from './scenes/UserList.scene';
import { AppRoute } from '../../shared/types/routing';

export const enum UserRoute {
  List = '/user/list',
  Edit = '/user/edit',
}

export const userRoutes: AppRoute[] = [userEditRoute, userListScene];

export type UserScenes = UserEditScene | UserListScene;
