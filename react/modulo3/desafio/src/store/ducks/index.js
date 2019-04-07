import { combineReducers } from 'redux';
import repositories from './repositories';
import modal from './modal';
import error from './error';

export default combineReducers({
  repositories,
  modal,
  error,
});
