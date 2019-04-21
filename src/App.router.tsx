import * as React from 'react';
import { Switch, Route } from 'react-router';
import { AppRoute } from './shared/types/routing';
import { PrivateRoute } from './shared/components/PrivateRoute';
import { userRoutes } from './modules/user/user.routing';
import { postRoutes } from './modules/post/post.routing';
import { getRoutePath } from './shared/helper/routing.helper';

const mapRoutes = (routeProps: AppRoute[]) =>
  routeProps.map(({ isPrivate, scene, ...rest }) => {
    const path = getRoutePath(scene);
    // TODO: check if any key exists twice
    const key = path;

    return isPrivate ? (
      <PrivateRoute {...{ ...rest, key, path }} />
    ) : (
      <Route {...{ ...rest, key, path }} />
    );
  });
export const AppRouter = () => (
  <Switch>
    {mapRoutes(userRoutes)}
    {mapRoutes(postRoutes)}
  </Switch>
);
