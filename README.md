# React Typescript Starter

## Dependencies
* [enzyme](https://airbnb.io/enzyme/)
* [react-router](https://github.com/ReactTraining/react-router)

## Enzyme
[Enzyme](https://airbnb.io/enzyme/) was set up with [Using Jest with TypeScript](https://basarat.gitbooks.io/typescript/docs/testing/jest.html) (describes how to setup both jest and enzyme).

## Routing

### Create a scene
**Note:** To simplify things I will use the UserEdit scene for the following instructions.

How to create and register a new scene in 3 steps:
1. Create a new `UserEdit.scene.tsx` file in `modules/user/scenes`
2. Define a interface for the scene params if there are any. It is important that you extend from the interface `SceneParams`.
3. Define the actual component (what should be rendered). Here is the correctly created [file](https://github.com/npeham/react-typescript-starter/blob/react-router/src/modules/user/scenes/UserEdit.scene.tsx).
4. Proceed with creating a new entry in the `UserRoute` enum.
5. Proceed with creating a `UserEditScene`interface in [`modules/user/user.routes.ts`](https://github.com/npeham/react-typescript-starter/blob/react-router/src/modules/user/scenes/UserEdit.scene.tsx). Make sure to correctly extend from `IScene`. The first parameter of `IScene` is the path of the scene. So it looks like: 
```
export interface UserEditScene extends IScene<UserRoute.Edit> {
  params: UserEditSceneParams;
}
```
**Important:** If a scene doesn't have any params (like the [`UserListScene`](https://github.com/npeham/react-typescript-starter/blob/react-router/src/modules/user/scenes/UserList.scene.tsx) you have to define the interface like this:
```
  export interface UserListScene extends IScene<UserRoute.List> {
  params?: never;
}
```
6. Export your created `UserEditScene`interface along with the other scenes at the bottom of the file (`UserScenes`) and you are done.
7. (optional) If you are creating the first scene in your module you also have to add the `UserScenes` to the `Scenes` type in the `types/routing.ts` file.
