import { AppRoute } from '../../shared/types/routing';
import { PostDetailScene, postDetailRoute } from './scenes/PostDetail.scene';

export const enum PostRoute {
  Detail = '/post',
}

export const postRoutes: AppRoute[] = [postDetailRoute];

export type PostScenes = PostDetailScene;
