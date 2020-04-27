import { combineReducers } from 'redux';
import settings from './settings';
import users from './users';

export default combineReducers({
  settings,
  users,
});
