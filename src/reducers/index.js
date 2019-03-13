import { combineReducers } from 'redux';
import { authReducer as auth } from './authReducer';
import { storyReducer as story } from './storyReducer';

export default combineReducers({ auth, story });
