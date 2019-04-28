import { takeLatest, call, put } from 'redux-saga/effects';
import {
  ActionTypeKeys,
  createUserFailed,
  createUserSucceeded,
} from '../user.actions';

export function* userEditSaga(action: any) {
  try {
    yield put(createUserSucceeded({ firstName: 'nico', lastName: 'peham' }));
  } catch (error) {
    yield put(createUserFailed());
  }
}

export const userSagas = [
  takeLatest(ActionTypeKeys.CreateUserRequested, userEditSaga),
];
