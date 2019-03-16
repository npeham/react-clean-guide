import { UserEditSene } from './scenes/UserEdit.scene';
import { UserListScene } from './scenes/UserList.scene';
import { AppRoute } from '../../shared/types/routing';

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
