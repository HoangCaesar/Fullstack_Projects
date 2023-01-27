import { all } from 'redux-saga/effects';

// Project import
import journeyListSaga from '../pages/journey-list/journeyList.saga';

// ==============================|| ROOT SAGA - COMBINE ALL SAGAS  ||============================== //

function* rootSaga() {
    yield all([journeyListSaga()]);
}

export default rootSaga;
