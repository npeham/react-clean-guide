# React Typescript Starter

## Dependencies
* [enzyme](https://airbnb.io/enzyme/)
* [react-router](https://github.com/ReactTraining/react-router)

## Enzyme
[Enzyme](https://airbnb.io/enzyme/) was set up with [Using Jest with TypeScript](https://basarat.gitbooks.io/typescript/docs/testing/jest.html) (describes how to setup both jest and enzyme).

## Routing

### Create a scene
**Note:** To simplify things I will use the already created `UserEdit` scene for the following instructions.

How to type-safe create and register a new scene in 6 easy steps:
1. Create a new `UserEdit.scene.tsx` file in `modules/user/scenes`
2. Define a interface for the scene params if there are any and export it. It is important that you extend from the interface `SceneParams`. Here is the actual code:
```
   export interface UserEditSceneParams extends SceneParams {
      userId: string;
      projId: string;
   }
```
3. Now define and export `paramsSchema` with the type `UserEditSceneParams`:
```
const paramsSchema: UserEditSceneParams = {
  projId: '',
  userId: '',
};
```
Honestly this only exist to avoid defining the path of a route with params like: `'/user/edit/:projId/:userId/'`. The final path will be auto-generated with the Route enum and the params schema using the helper funtion [`getRoutePath`](https://github.com/npeham/react-typescript-starter/blob/react-router/src/shared/helper/routing/routing.helper.ts#L7) that get called in the [`mapRoutes`](https://github.com/npeham/react-typescript-starter/blob/react-router/src/App.router.tsx#L11) function. With this approach you get errors at compile time when you forget to change the params at one place thanks to TypeScript.

4. Define the actual component (what should be rendered when navigating to this scene). To get TypeScript autocomplete support for your scene params don't forget to create your component like:
```
export const UserEditScene: React.SFC<
   RouteComponentProps<UserEditSceneParams>> = props => {
      const { userId, projId } = props.match.params;
      return (
         ...
      );
   };
```

5. At the bottom you have to create a `UserEditScene` interface with the correct scene params and then an `AppRoute` object called `userEditRoute`. Both have to be exported. It should look like this:
```
export interface UserEditScene extends IScene<UserRoute.Edit> {
  params: UserEditSceneParams;
}

export const userEditRoute: AppRoute = {
  scene: {
    path: UserRoute.Edit,
    params: paramsSchema,
  },
  component: UserEditScene,
};
```
Hint: The parameter of `IScene` is the path of the scene (Route enum).

**Important:** If a scene doesn't have any params like the [`UserListScene`](https://github.com/npeham/react-typescript-starter/blob/react-router/src/modules/user/scenes/UserList.scene.tsx) you have to define the interface like this:
   ```
     export interface UserListScene extends IScene<UserRoute.List> {
     params?: never;
   }
   ```
Also you doesn't need to create a `paramsSchema` object. 

Here is the correctly created [file](https://github.com/npeham/react-typescript-starter/blob/react-router/src/modules/user/scenes/UserEdit.scene.tsx).


6. Open the file [`modules/user/user.routing.ts`](https://github.com/npeham/react-typescript-starter/blob/react-router/src/modules/user/user.routes.ts) - you have to add/change 3 things here.
   * At first create a new entry in the `UserRoute` enum:
   ```
   export enum UserRoute {
      ...
      Edit = '/user/edit',
      ...
   }
   ```
   * Add the `userEditRoute` to the `AppRoute` array `userRoutes`:
   ```
      export const userRoutes: AppRoute[] = [userEditRoute, userListScene];
   ```
   * At least add the `UserEditScene` to the `UserScenes` type:
   ```
      export type UserScenes = UserEditScene | UserListScene;
   ```
 **Notice:** The enum doesn't include the params like `'/user/edit/:projId/:userId/'` thanks to the `paramsSchema` object and the [`getRoutePath`](https://github.com/npeham/react-typescript-starter/blob/react-router/src/shared/helper/routing/routing.helper.ts#L7) function.
 

7. (optional) If you are creating the first scene in your module you also have to do:
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
