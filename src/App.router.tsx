import * as React from 'react';
import { Switch, Route } from 'react-router';
import { AppRoute } from './shared/types/routing';
import { PrivateRoute } from './shared/components/PrivateRoute';
import { userRoutes } from './modules/user/user.routing';
import { postRoutes } from './modules/post/post.routing';
import { verifyIfPathOfSceneIsUnique } from './shared/helper/routing.helper';

const existingPaths: string[] = [];

const mapRoutes = (routeProps: AppRoute[]) => {
  return routeProps.map(({ isPrivate, scene, ...rest }) => {
    const path = verifyIfPathOfSceneIsUnique(scene, existingPaths);
    existingPaths.push(path);
    const key = path;

    return isPrivate ? (
      <PrivateRoute {...{ ...rest, key, path }} />
    ) : (
      <Route {...{ ...rest, key, path }} />
    );
  });
};

export const AppRouter = () => (
  <Switch>
    {mapRoutes(userRoutes)}
    {mapRoutes(postRoutes)}
  </Switch>
);
