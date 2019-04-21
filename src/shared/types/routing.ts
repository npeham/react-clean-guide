import { RouteProps } from 'react-router';
import { UserScenes } from '../../modules/user/user.routing';
import { PostScenes } from '../../modules/post/post.routing';

export interface AppRoute extends RouteProps {
  isPrivate?: boolean;
  scene: Scene;
}

export interface IScene<R extends string> {
  path: R;
  params?: SceneParams;
}

export interface SceneParams {
  [key: string]: string;
}

export type Scene = UserScenes | PostScenes;
