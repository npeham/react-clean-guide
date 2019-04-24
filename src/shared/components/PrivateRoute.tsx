import * as React from 'react';
import { RouteProps, Route } from 'react-router';

type PrivateRoute = RouteProps;

export const PrivateRoute: React.SFC<PrivateRoute> = props => (
  <Route {...props} />
);
