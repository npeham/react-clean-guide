import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { getPathWithParams } from '../../../shared/helper/routing.helper';
import { SceneParams } from '../../../shared/types/routing';
import { UserRoute } from '../../user/user.routing';

export interface PostDetailSceneParams extends SceneParams {
  postId: string;
}

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
