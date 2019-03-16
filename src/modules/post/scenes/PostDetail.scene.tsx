import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { UserRoute } from '../../user/user.routes';

export interface PostDetailSceneParams {
  postId: string;
}

export const PostDetailScene = (
  props: RouteComponentProps<PostDetailSceneParams>,
) => {
  return (
    <React.Fragment>
      <div>post detail --> postId: {props.match.params.postId}</div>{' '}
      <button onClick={() => props.history.push('user/edit/5/6')}>click</button>
    </React.Fragment>
  );
};
