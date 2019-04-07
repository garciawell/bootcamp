import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Creators as RepositoriesActions } from '../ducks/repositories';
import { Creators as modalActions } from '../ducks/modal';
import { Creators as ErrorActions } from '../ducks/error';

export function* getRepositories(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.data}`);

    const infoUser = {
      id: data.id,
      name: data.name,
      login: data.login,
      avatar_url: data.avatar_url,
      cordinations: action.payload.cordinations,
    };
    yield put(RepositoriesActions.getRepositoriesSuccess(infoUser));

    yield put(modalActions.closeModal());

    toast.success('Usuário cadastrado com sucesso !', {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível obter as playlists'));
    yield put(modalActions.closeModal());
    toast.error('Usuario não encontrado !', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
