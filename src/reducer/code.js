import { handleActions } from 'redux-actions';
import * as constants from '../constants';

export default handleActions({
  [constants.CODE_UPDATE]: (state, action) => action.payload,
}, null);
