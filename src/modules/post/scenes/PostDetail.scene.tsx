import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { SceneParams, AppRoute, IScene } from '../../../shared/types/routing';
import { UserRoute } from '../../user/user.routing';
import { PostRoute } from '../post.routing';
import { getPathWithParams } from '../../../shared/helper/routing/routing.helper';

export interface PostDetailSceneParams extends SceneParams {
  postId: string;
}

const postDetailSceneDefaultParams: PostDetailSceneParams = {
  postId: '',
};

export const PostDetailScene = (
  props: RouteComponentProps<PostDetailSceneParams>,
) => {
  const userListScenePath = getPathWithParams({
    path: UserRoute.List,
  });
  return (
    <React.Fragment>
      <div>post detail --> postId: {props.match.params.postId}</div>
      <button onClick={() => props.history.push(userListScenePath)}>
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
    params: postDetailSceneDefaultParams,
  },
};
