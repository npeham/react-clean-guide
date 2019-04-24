import * as React from 'react';
import { Switch, Route, RouteProps } from 'react-router';
import { AppRoute } from './shared/types/routing';
import { PrivateRoute } from './shared/components/PrivateRoute';
import { userRoutes } from './modules/user/user.routing';
import { postRoutes } from './modules/post/post.routing';
import { verifyIfPathIsUnique } from './shared/helper/routing.helper';

const existingPaths: string[] = [];

const mapRoutes = (routeProps: AppRoute[]) =>
  routeProps.map(({ isPrivate, path, ...rest }) => {
    const uniquePath = verifyIfPathIsUnique(path, existingPaths);
    existingPaths.push(uniquePath);
    const key = uniquePath;

    const routeProps: RouteProps = { ...rest, path: uniquePath };
    return isPrivate ? (
      <PrivateRoute {...{ ...routeProps, key }} />
    ) : (
      <Route {...{ ...routeProps, key }} />
    );
  });
export const AppRouter = () => (
  <Switch>
    {mapRoutes(userRoutes)}
    {mapRoutes(postRoutes)}
  </Switch>
);
