import { handleActions } from 'redux-actions';
import * as constants from '../constants';


export default handleActions({
  [constants.GEOJSON_GET_SUCCESS]: (state, action) => action.payload.result,
}, null);
