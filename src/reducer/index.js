import { combineReducers } from 'redux';
import entities from './entities';
import geoJSON from './geojson';
import code from './code';

export default combineReducers({
  entities,
  geoJSON,
  code,
});
