import { combineReducers } from "redux";
import playlists from "./playlists";
import playDetails from "./playDetails";
import error from "./error";
import player from "./player";

export default combineReducers({
  playlists,
  error
});
