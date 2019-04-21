import { AppRoute, IScene } from '../../shared/types/routing';
import {
  PostDetailScene,
  PostDetailSceneParams,
} from './scenes/PostDetail.scene';

export enum PostRoute {
  Detail = '/post',
}

interface PostDetailScene extends IScene<PostRoute.Detail> {
  params: PostDetailSceneParams;
}

export const postRoutes: AppRoute[] = [
  {
    component: PostDetailScene,
    scene: {
      path: PostRoute.Detail,
      params: { postId: '' },
    },
  },
];

export type PostScenes = PostDetailScene;
