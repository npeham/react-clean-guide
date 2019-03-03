import * as React from 'react';
import { Switch, Route, RouteProps } from 'react-router';
import { userRoutes } from './modules/user/user.routes';

export interface AppRoute extends RouteProps {
  params?: string[];
}

const mapRoutes = (routeProps: RouteProps[]) =>
  routeProps.map(routeProp => (
    <Route path={routeProp.path} component={routeProp.component} />
  ));

export const AppRouter = () => <Switch>{mapRoutes(userRoutes)}</Switch>;
