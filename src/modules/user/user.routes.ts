import { RouteProps } from 'react-router-dom';
import { UserEditSene } from './scenes/UserEdit.scene';
import { UserListScene } from './scenes/UserList.scene';
import { AppRoute } from '../../App.router';

enum UserRoute {
  List = '/user/list',
  Edit = '/user/edit/:userId',
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
