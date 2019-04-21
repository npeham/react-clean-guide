import { getPathWithParams, getRoutePath } from './routing.helper';
import {
  UserEditScene,
  UserRoute,
  UserListScene,
} from '../../modules/user/user.routing';

describe('routing helper tests', () => {
  describe('getRoutePath', () => {
    it('should return the correct route path computed from path and defaultParams of scene', () => {
      const userEditScene: UserEditScene = {
        path: UserRoute.Edit,
        params: { projId: '', userId: '' },
      };

      expect(getRoutePath(userEditScene)).toBe('/user/edit/:path/:params');
    });
  });

  describe('tests for getPathWithParams function', () => {
    it('should return the correct path with params set', () => {
      const userEditScene: UserEditScene = {
        path: UserRoute.Edit,
        params: { projId: '3', userId: '8' },
      };

      expect(getPathWithParams(userEditScene)).toBe('/user/edit/8/3');
    });

    it('should return the correct path with no params set', () => {
      const userListScene: UserListScene = {
        path: UserRoute.List,
      };

      expect(getPathWithParams(userListScene)).toBe('/user/list');
    });
  });
});
