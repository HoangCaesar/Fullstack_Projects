import { PayloadAction } from '@reduxjs/toolkit';
import { call, debounce, delay, put, takeLatest } from 'redux-saga/effects';

// Project Import
import journeyListApi from '../../api/journeyList.api';
import { Journey, ListParams, ListResponse } from './../../models';
import { journeyActions } from './journeyList.slice';

// ==============================|| JOURNEY LIST SAGA  ||============================== //

function* fetchJourneyList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<Journey> = yield call(journeyListApi.getAll, action.payload);
        yield delay(1000);
        yield put(journeyActions.fetchJourneyListSuccess(response));
    } catch (error) {
        console.log('Failed to log Journey list', error);
        yield put(journeyActions.fetchJourneyListFailed('Failed to load Journey list'));
    }
}

function* handleSearchDebounce(action: PayloadAction<ListParams>) {
    yield put(journeyActions.setFilter(action.payload));
}

function* journeyListSaga() {
    yield takeLatest(journeyActions.fetchJourneyList, fetchJourneyList);
    yield debounce(1000, journeyActions.setFilterWithDebounce.type, handleSearchDebounce);
}

export default journeyListSaga;
