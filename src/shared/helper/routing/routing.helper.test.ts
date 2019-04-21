import {
  UserEditScene,
  UserEditSceneParams,
} from '../../../modules/user/scenes/UserEdit.scene';
import { UserRoute } from '../../../modules/user/user.routing';
import { UserListScene } from '../../../modules/user/scenes/UserList.scene';
import {
  getRoutePath,
  getPathWithParams,
  verifyIfPathOfSceneIsUnique,
  RoutingError,
  mergeParamsWithDefault,
} from './routing.helper';

describe('routing helper tests', () => {
  const userEditScene: UserEditScene = {
    path: UserRoute.Edit,
    params: { projId: '3', userId: '8' },
  };

  const userListScene: UserListScene = {
    path: UserRoute.List,
  };

  describe('getRoutePath', () => {
    it('should return the correct route path computed from path and defaultParams of scene', () => {
      expect(getRoutePath(userEditScene)).toBe('/user/edit/:projId/:userId');
    });

    // tslint:disable-next-line:max-line-length
    it('should return the correct route path computed from path and defaultParams of scene with no params', () => {
      expect(getRoutePath(userListScene)).toBe('/user/list');
    });
  });

  describe('getPathWithParams', () => {
    it('returns the correct path with params set', () => {
      expect(getPathWithParams(userEditScene)).toBe('/user/edit/3/8');
    });

    it('returns the correct path with no params set', () => {
      expect(getPathWithParams(userListScene)).toBe('/user/list');
    });
  });

  describe('verifyIfPathOfSceneIsUnique', () => {
    it('throws an error because path is already existing', () => {
      const existingPaths = ['/user/edit/:projId/:userId', '/user/list'];

      const t = () => verifyIfPathOfSceneIsUnique(userEditScene, existingPaths);

      expect(t).toThrowError(RoutingError.DuplicatePath);
    });

    it('returns the correct route path', () => {
      const existingPaths = ['/user/list'];

      expect(verifyIfPathOfSceneIsUnique(userEditScene, existingPaths)).toBe(
        '/user/edit/:projId/:userId',
      );
    });
  });
});
