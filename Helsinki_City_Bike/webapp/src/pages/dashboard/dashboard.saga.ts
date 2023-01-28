import { call, delay, put, takeLatest } from 'redux-saga/effects';

// Project Import
import highlightsApi from '../../api/highlight.api';
import { Highlight, HighlightsResponse } from './../../models';
import { highlightsActions } from './dashboard.slice';

// ==============================|| highlights LIST SAGA  ||============================== //

function* fetchHighlightsList() {
    try {
        const response: HighlightsResponse<Highlight> = yield call(highlightsApi.getHighlights);
        yield delay(1000);
        yield put(highlightsActions.fetchHighlightsListSuccess(response));
    } catch (error) {
        console.log('Failed to log Journey list', error);
        yield put(highlightsActions.fetchHighlightsListFailed('Failed to load highlights list'));
    }
}

function* dashboardSaga() {
    yield takeLatest(highlightsActions.fetchHighlightsList, fetchHighlightsList);
}

export default dashboardSaga;
