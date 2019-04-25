# React Typescript Starter

## Dependencies
* [enzyme](https://airbnb.io/enzyme/)
* [react-router](https://github.com/ReactTraining/react-router)

## DevDependencies
* [prettier](https://github.com/prettier/prettier)
* [tslint](https://github.com/palantir/tslint)
* [husky](https://github.com/typicode/husky)
* [lint-staged](https://github.com/okonet/lint-staged)

## Tslint and code format
Along the dev dependencies, the setup also contains these tslint dependencies:
* [tslint-config-airbnb](https://github.com/progre/tslint-config-airbnb)
* [tslint-config-prettier](https://github.com/prettier/tslint-config-prettier)
* [tslint-react](https://github.com/palantir/tslint-react)

Thanks to the husky, prettier and lint-staged setup your code gets formated automatically on every commit.

## Enzyme
[Enzyme](https://airbnb.io/enzyme/) was set up with [Using Jest with TypeScript](https://basarat.gitbooks.io/typescript/docs/testing/jest.html) (describes how to setup both jest and enzyme).

## Routing

### Create a scene
**Note:** To simplify things I will use the already created `UserEdit` scene for the following instructions.

How to type-safe create and register a new scene in 4 easy steps:
1. Create a new `UserEdit.scene.tsx` file in `modules/user/scenes`
2. Define a interface for the scene params if there are any and export it. It is important that you extend from the interface `SceneParams`. Here is the actual code:
```
   export interface UserEditSceneParams extends SceneParams {
      userId: string;
      projId: string;
   }
```
3. Define the actual component (what should be rendered when navigating to this scene). To get TypeScript autocomplete support for your scene params don't forget to create your component like:
```
   export const UserEditSene: React.SFC<
  RouteComponentProps<UserEditSceneParams>
> = props => {
  const { userId, projId } = props.match.params;
  return (
    
  );
};
```
**Important:** If your scene has no params you just write `React.SFC<RouteComponentProps>` like how it was done in the [`User.scene.tsx`](https://github.com/npeham/react-typescript-starter/blob/react-router/src/modules/user/scenes/UserList.scene.tsx).

Here is the correctly created [file](https://github.com/npeham/react-typescript-starter/blob/react-router/src/modules/user/scenes/UserEdit.scene.tsx).

4. Open the file [`modules/user/user.routing.ts`](https://github.com/npeham/react-typescript-starter/blob/react-router/src/modules/user/user.routes.ts) - you have to add/change 4 things here.
   * At first create a new entry in the `UserRoute` enum:
   ```
   export enum UserRoute {
      ...
      Edit = '/user/edit/:userId/:projId',
      ...
   }
   ```
   * Second, add a new entry in the `userRoutes` array like:
   ```
      ...
      {
       path: UserRoute.Edit,
       component: UserEditSene,
      },
      ...
   ```
   * Then create a `UserEditScene` interface with the correct scene params. Make sure to correctly extend from `IScene`. The first parameter of `IScene` is the path of the scene. It should look like this: 
   ```
   export interface UserEditScene extends IScene<UserRoute.Edit> {
     params: UserEditSceneParams;
   }
   ```
   **Important:** If a scene doesn't have any params like the [`UserListScene`](https://github.com/npeham/react-typescript-starter/blob/react-router/src/modules/user/scenes/UserList.scene.tsx) you have to define the interface like this:
   ```
     export interface UserListScene extends IScene<UserRoute.List> {
     params?: never;
   }
   ```
   * Don't forget to export your created `UserEditScene`interface along with the other scenes at the bottom of the file (`UserScenes`).
5. (optional) If you are creating the first scene in your module you also have to do:
- Add the `UserScenes` to the exported `Scenes` type in the [`types/routing.ts`](https://github.com/npeham/react-typescript-starter/blob/react-router/src/shared/types/routing.ts) file.
- Add `mapRoutes(userRoutes)` to the `Switch` tag in the [`App.router.ts`](https://github.com/npeham/react-typescript-starter/blob/react-router/src/App.router.tsx) file.

### Navigate to a scene
If you want to navigate to a scene you have to call the [`getPathWithParams`](https://github.com/npeham/react-typescript-starter/blob/react-router/src/shared/helper/routing/routing.helper.ts#L19) function:
```
const userEditScenePath = getPathWithParams({
  path: UserRoute.Edit,
  params: {
    projId: '3',
    userId: '8',
  },
});
```
The result is a valid path where you can route to with `react-router`:
```
<button onClick={() => props.history.push(userEditScenePath)}>
   click
</button>
```
**Notice:** Thank to our type-safe setup TypeScript will know the params of the scene based on the path (Route enum) you passed to [`getPathWithParams`](https://github.com/npeham/react-typescript-starter/blob/react-router/src/shared/helper/routing/routing.helper.ts#L19) function. So you will get nice autocompletion and you cannot pass the wrong params.
