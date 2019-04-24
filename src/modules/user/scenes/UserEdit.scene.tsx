import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { SceneParams } from '../../../shared/types/routing';

export interface UserEditSceneParams extends SceneParams {
  userId: string;
  projId: string;
}

export const UserEditSene: React.SFC<
  RouteComponentProps<UserEditSceneParams>
> = props => {
  const { userId, projId } = props.match.params;
  return (
    <div>
      <span>userId --> {userId}</span>
      <br />
      <span>projId --> {projId}</span>
    </div>
  );
};
