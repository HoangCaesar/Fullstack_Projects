import { fork, take } from 'redux-saga/effects';
import { authActions } from './authSlice';

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem('token'));
        if (!isLoggedIn) {
            // yield take(authActions.login.type)
        }
    }
}

export default function* authSaga() {
    yield fork(watchLoginFlow);
}
