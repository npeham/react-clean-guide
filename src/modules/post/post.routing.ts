import { AppRoute, IScene } from '../../shared/types/routing';
import {
  PostDetailScene,
  PostDetailSceneParams,
} from './scenes/PostDetail.scene';

export enum PostRoute {
  Detail = '/post/:postId',
}

interface PostDetailScene extends IScene<PostRoute.Detail> {
  params: PostDetailSceneParams;
}

export const postRoutes: AppRoute[] = [
  {
    path: PostRoute.Detail,
    component: PostDetailScene,
  },
];

export type PostScenes = PostDetailScene;
