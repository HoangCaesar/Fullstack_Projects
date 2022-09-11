import { all } from 'redux-saga/effects';
import authSaga from '../features/authentication/authSaga';

function* rootSaga() {
    // yield all([authSaga()]);
}

export default rootSaga;
