import { call, put } from 'redux-saga/effects';
import TrackPlayer from 'react-native-track-player';
import PlayerActions from '~/store/ducks/player';

// export function* init() {
//   yield call(TrackPlayer.setupPlayer);

//   TrackPlayer.addEventListener('playback-track-changed', console.tron.log);
//   TrackPlayer.addEventListener('playback-state', console.tron.log);
// }

export function* init() {
  yield call(TrackPlayer.setupPlayer);

  TrackPlayer.updateOptions({
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      TrackPlayer.CAPABILITY_STOP,
    ],
    notificationCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      TrackPlayer.CAPABILITY_STOP,
    ],
    compactCapabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
  });

  TrackPlayer.addEventListener('playback-state', (data) => {
    console.tron.log('STATE', data);
  });
}

export function* setPodcast({ podcast }) {
  yield call(TrackPlayer.add, [...podcast.tracks]);
  yield put(PlayerActions.setPodcastSuccess(podcast));

  yield call(TrackPlayer.play);
}
