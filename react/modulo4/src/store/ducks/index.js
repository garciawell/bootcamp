import { combineReducers } from 'redux';
import playlists from './playlists';
import playDetails from './playDetails';
import error from './error';

export default combineReducers({
  playlists,
  playDetails,
  error,
});
