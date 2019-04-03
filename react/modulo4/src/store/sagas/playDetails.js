import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlayDetailsActions } from '../ducks/playDetails';

export function* getPlayDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlayDetailsActions.getPlayDetailsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
