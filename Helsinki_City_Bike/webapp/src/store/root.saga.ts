import { all } from 'redux-saga/effects';

// Project import
import journeyListSaga from '../pages/journey-list/journeyList.saga';
import dashboardSaga from '../pages/dashboard/dashboard.saga';

// ==============================|| ROOT SAGA - COMBINE ALL SAGAS  ||============================== //

function* rootSaga() {
    yield all([journeyListSaga(), dashboardSaga()]);
}

export default rootSaga;
