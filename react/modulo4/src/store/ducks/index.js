import { combineReducers } from 'redux';
import playlists from './playlists';
import playDetails from './playDetails';

export default combineReducers({
  playlists,
  playDetails,
});
