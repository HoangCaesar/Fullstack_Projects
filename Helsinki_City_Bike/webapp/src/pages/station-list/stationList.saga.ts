import { PayloadAction } from '@reduxjs/toolkit';
import { call, debounce, delay, put, takeLatest } from 'redux-saga/effects';

// Project Import
import stationListApi from '../../api/stationList.api';
import { ListParams, ListResponse, Station } from '../../models';
import { stationActions } from './stationList.slice';

// ==============================|| STATION LIST SAGA  ||============================== //

function* fetchStationList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<Station> = yield call(stationListApi.getList, action.payload);
        yield delay(1000);
        yield put(stationActions.fetchStationListSuccess(response));
    } catch (error) {
        console.log('Failed to log Station list', error);
        yield put(stationActions.fetchStationListFailed('Failed to load Station list'));
    }
}

function* handleSearchDebounce(action: PayloadAction<ListParams>) {
    yield put(stationActions.setFilter(action.payload));
}

function* stationListSaga() {
    yield takeLatest(stationActions.fetchStationList, fetchStationList);
    yield debounce(1000, stationActions.setFilterWithDebounce.type, handleSearchDebounce);
}

export default stationListSaga;
