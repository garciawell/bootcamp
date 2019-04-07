import { all, takeLatest } from 'redux-saga/effects';

import { Types as repositoriesTypes } from '../ducks/repositories';

import { getRepositories } from './repositories';

export default function* rootSaga() {
  yield all([takeLatest(repositoriesTypes.GET_REQUEST, getRepositories)]);
}
