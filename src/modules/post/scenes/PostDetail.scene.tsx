import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { SceneParams, AppRoute, IScene } from '../../../shared/types/routing';
import { UserRoute } from '../../user/user.routing';
import { PostRoute } from '../post.routing';
import { getPathWithParams } from '../../../shared/helper/routing/routing.helper';

export interface PostDetailSceneParams extends SceneParams {
  postId: string;
}

const paramsSchema: PostDetailSceneParams = {
  postId: '',
};

export const PostDetailScene = (
  props: RouteComponentProps<PostDetailSceneParams>,
) => {
  const userEditScenePath = getPathWithParams({
    path: UserRoute.Edit,
    params: {
      projId: '3',
      userId: '9',
    },
  });
  return (
    <React.Fragment>
      <div>post detail --> postId: {props.match.params.postId}</div>
      <button onClick={() => props.history.push(userEditScenePath)}>
        click
      </button>
    </React.Fragment>
  );
};

export interface PostDetailScene extends IScene<PostRoute.Detail> {
  params: PostDetailSceneParams;
}

export const postDetailRoute: AppRoute = {
  component: PostDetailScene,
  scene: {
    path: PostRoute.Detail,
    params: paramsSchema,
  },
};
