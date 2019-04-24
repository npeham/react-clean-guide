import { getPathWithParams, verifyIfPathIsUnique } from './routing.helper';
import {
  UserEditScene,
  UserRoute,
  UserListScene,
} from '../../modules/user/user.routing';
import { ErrorCode } from '../ErrorCode.enum';

describe('routing helper tests', () => {
  const userEditScene: UserEditScene = {
    path: UserRoute.Edit,
    params: { projId: '3', userId: '8' },
  };

  const userListScene: UserListScene = {
    path: UserRoute.List,
  };

  describe('getPathWithParams', () => {
    it('should return the correct path with params set', () => {
      expect(getPathWithParams(userEditScene)).toBe('/user/edit/8/3');
    });

    it('should return the correct path with no params set', () => {
      expect(getPathWithParams(userListScene)).toBe('/user/list');
    });
  });

  describe('verifyIfPathOfSceneIsUnique', () => {
    it('throws an error because path is already existing', () => {
      const existingPaths = ['/user/edit/:userId/:projId', '/user/list'];

      const t = () => verifyIfPathIsUnique(userEditScene.path, existingPaths);

      expect(t).toThrowError(ErrorCode.RoutingDuplicatePath);
    });

    it('returns the correct route path', () => {
      const existingPaths = ['/user/list'];

      expect(verifyIfPathIsUnique(userEditScene.path, existingPaths)).toBe(
        '/user/edit/:userId/:projId',
      );
    });
  });
});
