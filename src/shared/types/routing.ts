import { RouteProps } from 'react-router';
import { UserScenes } from '../../modules/user/user.routing';
import { PostScenes } from '../../modules/post/post.routing';

export interface AppRoute extends RouteProps {
  isPrivate?: boolean;
  path: string;
}

// export interface IScene<R extends Route, P extends Params> {
//   path: R;
//   params?: P;
// }

export interface IScene<R extends string> {
  path: R;
  params?: SceneParams;
}

export interface SceneParams {
  [key: string]: string;
}

export type Scene = UserScenes | PostScenes;

// export type Route = UserRoute | PostRoute;

// export type Params = UserEditSceneParams | PostDetailSceneParams;
