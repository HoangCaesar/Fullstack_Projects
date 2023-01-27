import { all } from 'redux-saga/effects';

// ==============================|| ROOT SAGA - COMBINE ALL SAGAS  ||============================== //

function* rootSaga() {
    yield all([]);
}

export default rootSaga;
