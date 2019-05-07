import { takeLatest, call, put } from 'redux-saga/effects';
import {
  ActionTypeKeys,
  createUserFailed,
  createUserSucceeded,
  User,
  createUserRequested,
} from '../user.actions';
import { userEditRequest } from '../user.api';
import { ActionType } from 'deox';

export function* userEditSaga(action: ActionType<typeof createUserRequested>) {
  try {
    // define type explicitly because of lack of return types of generators:
    // https://github.com/redux-saga/redux-saga/issues/1286#issuecomment-482866473
    const fetchedUser: User = yield call(userEditRequest, {
      firstName: 'nico',
      lastName: 'peham',
    });
    yield put(createUserSucceeded(fetchedUser));
  } catch (error) {
    yield put(createUserFailed());
  }
}

export const userSagas = [
  takeLatest(ActionTypeKeys.CreateUserRequested, userEditSaga),
];
