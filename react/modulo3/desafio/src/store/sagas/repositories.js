import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as RepositoriesActions } from '../ducks/repositories';
import { Creators as modalActions } from '../ducks/modal';
// import { Creators as ErrorActions } from '../ducks/error';

export function* getRepositories(action) {
  try {
    const response = yield call(api.get, `/users/${action.payload.data}`);

    yield put(RepositoriesActions.getRepositoriesSuccess(response.data));
    yield put(modalActions.closeModal());
  } catch (err) {
    // yield put(ErrorActions.setError('Não foi possível obter as playlists'));
  }
}
