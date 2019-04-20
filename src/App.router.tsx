import * as React from 'react';
import { Switch, Route } from 'react-router';
import { AppRoute } from './shared/types/routing';
import { PrivateRoute } from './shared/components/PrivateRoute';
import { userRoutes } from './modules/user/user.routing';
import { postRoutes } from './modules/post/post.routing';

const mapRoutes = (routeProps: AppRoute[]) =>
  routeProps.map(({ isPrivate, ...rest }) => {
    const key = rest.path.toString();
    return isPrivate ? (
      <PrivateRoute {...{ ...rest, key }} />
    ) : (
      <Route {...{ ...rest, key }} />
    );
  });
export const AppRouter = () => (
  <Switch>
    {mapRoutes(userRoutes)}
    {mapRoutes(postRoutes)}
  </Switch>
);
