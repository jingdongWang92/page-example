import { createAction } from 'redux-actions';
import * as constants from './constants';
import { normalize } from 'normalizr';
import * as schemas from './schemas';


export const getGeoJSON = createAction(constants.GEOJSON_GET);
export const getGeoJSONSuccess = createAction(constants.GEOJSON_GET_SUCCESS,
  res => normalize(res.payload, schemas.cartogram),
);
export const getGeoJSONFailed = createAction(constants.GEOJSON_GET_FAILED);


export const updateCode = createAction(constants.CODE_UPDATE);
