import { fork, put, call, all, takeEvery } from 'redux-saga/effects';
import * as apis from './apis';
import * as constants from './constants';
import * as actions from './actions';
import swal from 'sweetalert2';


function * watchGetGeoJSON() {
  yield takeEvery(constants.GEOJSON_GET, function * getGeoJSON(action) {
    try {
      const res = yield call(apis.getGeoJSON);
      yield put(actions.getGeoJSONSuccess(res));

    } catch (err) {
      yield call(() => swal(err.message));
    }
  });
}


export default function * rootSaga() {
  yield all([
    fork(watchGetGeoJSON),
  ]);
}
