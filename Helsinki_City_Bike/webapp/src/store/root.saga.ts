import { all } from 'redux-saga/effects';

// Project import
import dashboardSaga from '../pages/dashboard/dashboard.saga';
import journeyListSaga from '../pages/journey-list/journeyList.saga';
import stationListSaga from '../pages/station-list/stationList.saga';

// ==============================|| ROOT SAGA - COMBINE ALL SAGAS  ||============================== //

function* rootSaga() {
    yield all([journeyListSaga(), dashboardSaga(), stationListSaga()]);
}

export default rootSaga;
