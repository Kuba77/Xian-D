// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import trips from './trips';

const rootReducer = combineReducers({
  routing,
  trips
});

export default rootReducer;
