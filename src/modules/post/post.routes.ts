import { AppRoute } from '../../shared/types/routing';
import { PostDetailScene } from './scenes/PostDetail.scene';

export enum PostRoute {
  Detail = '/post/:postId',
}

export const postRoutes: AppRoute[] = [
  {
    path: PostRoute.Detail,
    component: PostDetailScene,
  },
];
