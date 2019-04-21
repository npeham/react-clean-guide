import { Scene, SceneParams } from '../../types/routing';

export enum RoutingError {
  DuplicatePath = 'DUPLICATE_PATH_ERROR',
}

export const getRoutePath = (scene: Scene): string => {
  if (!scene.params) {
    return scene.path;
  }

  const routeParamKeys = Object.keys(scene.params);

  return routeParamKeys.reduce((previous: string, paramKey: string) => {
    return `${previous}/:${paramKey}`;
  },                           scene.path);
};

export function getPathWithParams(scene: Scene): string {
  if (!scene.params) {
    return scene.path;
  }

  let pathWithParams: string = getRoutePath(scene);
  const paramsAsString = Object.keys(scene.params);

  paramsAsString.forEach((param: string) => {
    pathWithParams = pathWithParams.replace(`:${param}`, scene.params[param]);
  });

  return pathWithParams;
}

export const verifyIfPathOfSceneIsUnique = (
  scene: Scene,
  existingPaths: string[],
): string => {
  const path = getRoutePath(scene);
  const isPathUnique = !existingPaths.includes(path);

  if (!isPathUnique) {
    throw Error(RoutingError.DuplicatePath);
  }

  return path;
};

// // CORRECT
// getPathWithParams({
//   path: PostRoute.Detail,
//   params: { postId: '4' },
// });

// getPathWithParams({
//   path: UserRoute.List,
// });

// getPathWithParams({
//   path: UserRoute.List,
//   params: undefined,
// });

// // ERROR
// getPathWithParams({
//   path: PostRoute.Detail,
//   params: undefined,
// });

// getPathWithParams({
//   path: PostRoute.Detail,
// });

// getPathWithParams({
//   path: UserRoute.List,
//   params: { wrongParam: 'value' },
// });
