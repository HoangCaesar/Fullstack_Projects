import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { authActions } from './auth.slice';
import { UserLogin } from '../../models';

function* handleLogin(payload: UserLogin) {
    try {
        yield delay(2000);
        localStorage.setItem('access_token', 'fake_token');
    } catch (error) {
        yield put(authActions.loginFailed('Failed to login'));
    }
}

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        if (!isLoggedIn) {
            const action: PayloadAction<UserLogin> = yield take(authActions.login.type);
            yield fork(handleLogin, action.payload);
        }
    }
}

function* authSaga() {
    yield fork(watchLoginFlow);
}

export default authSaga;
