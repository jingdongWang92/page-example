import { handleActions } from 'redux-actions';
import * as constants from '../constants';
import merge from 'lodash/fp/merge';


export default handleActions({
  [constants.GEOJSON_GET_SUCCESS]: (state, action) => merge(state, action.payload.entities),
}, {
});
