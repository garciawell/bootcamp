import { combineReducers } from 'redux';
import repositories from './repositories';
import cordinations from './cordinations';
import modal from './modal';
import error from './error';

export default combineReducers({
  repositories,
  cordinations,
  modal,
  error,
});
