import * as React from 'react';
import { Switch, Route } from 'react-router';
import { userRoutes } from './modules/user/user.routes';
import { AppRoute } from './shared/types/routing';
import { PrivateRoute } from './shared/components/PrivateRoute';
import { postRoutes } from './modules/post/post.routes';

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
