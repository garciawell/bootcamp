import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlaylistsTypes } from '../ducks/playlists';
import { Types as PlayDetailsTypes } from '../ducks/playDetails';

import { getPlaylists } from './playlists';
import { getPlayDetails } from './playDetails';

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlayDetailsTypes.GET_REQUEST, getPlayDetails),
  ]);
}
