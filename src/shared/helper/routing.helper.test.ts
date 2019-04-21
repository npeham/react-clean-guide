import {
  getPathWithParams,
  getRoutePath,
  verifyIfPathOfSceneIsUnique,
  RoutingError,
} from './routing.helper';
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

      expect(getRoutePath(userEditScene)).toBe('/user/edit/:projId/:userId');
    });

    // tslint:disable-next-line:max-line-length
    it('should return the correct route path computed from path and defaultParams of scene with no params', () => {
      const userListScene: UserListScene = {
        path: UserRoute.List,
      };

      expect(getRoutePath(userListScene)).toBe('/user/list');
    });
  });

  describe('tests for getPathWithParams function', () => {
    it('should return the correct path with params set', () => {
      const userEditScene: UserEditScene = {
        path: UserRoute.Edit,
        params: { projId: '3', userId: '8' },
      };

      expect(getPathWithParams(userEditScene)).toBe('/user/edit/3/8');
    });

    it('should return the correct path with no params set', () => {
      const userListScene: UserListScene = {
        path: UserRoute.List,
      };

      expect(getPathWithParams(userListScene)).toBe('/user/list');
    });
  });

  describe('verifyIfPathOfSceneIsUnique function tests', () => {
    it('throws an error because path is already existing', () => {
      const existingPaths = ['/user/edit/:projId/:userId', '/user/list'];

      const userEditScene: UserEditScene = {
        path: UserRoute.Edit,
        params: { projId: '', userId: '' },
      };

      const t = () => verifyIfPathOfSceneIsUnique(userEditScene, existingPaths);

      expect(t).toThrowError(RoutingError.DuplicatePath);
    });

    it('returns the correct route path', () => {
      const existingPaths = ['/user/list'];

      const userEditScene: UserEditScene = {
        path: UserRoute.Edit,
        params: { projId: '', userId: '' },
      };

      expect(verifyIfPathOfSceneIsUnique(userEditScene, existingPaths)).toBe(
        '/user/edit/:projId/:userId',
      );
    });
  });
});
