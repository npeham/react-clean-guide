import { RouteProps } from 'react-router';
import { UserRoute } from '../../modules/user/user.routes';
import { UserEditSceneParams } from '../../modules/user/scenes/UserEdit.scene';
import { PostRoute } from '../../modules/post/post.routes';
import { PostDetailSceneParams } from '../../modules/post/scenes/PostDetail.scene';

export interface AppRoute extends RouteProps {
  isPrivate?: boolean;
}

interface UserEditScene {
  path: UserRoute.Edit;
  params: UserEditSceneParams;
}

interface PostDetailScene {
  path: PostRoute.Detail;
  params: PostDetailSceneParams;
}

export type Scene = UserEditScene | PostDetailScene;
