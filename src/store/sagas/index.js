import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import Api from '../../api';

function* delayName(action) {
    try {
        const targetName = action.payload.name;
        yield put({type: types.APP_CHANGE_NAME, payload: { actual: targetName } } );
        yield call(delay, 500);
        yield put({type: types.APP_CHANGE_DISPLAY_NAME, payload: { display: targetName } } );
    } catch (e) {
        console.log(e)
        yield put({type: types.APP_CHANGE_NAME, payload: { actual: "" } });
        yield put({type: types.APP_CHANGE_DISPLAY_NAME, payload: { display: "" } });
    }
}

function* rootSaga() {
    yield takeEvery(types.USER_CHANGE_NAME, delayName);
}

export default rootSaga;