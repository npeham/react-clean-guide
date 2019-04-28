import { userSagas } from './modules/user/sagas/user.sagas';
import { all } from 'redux-saga/effects';

// https://github.com/redux-saga/redux-saga/issues/160#issuecomment-308540204
export default function* rootSaga() {
  yield all([...userSagas]);
}
