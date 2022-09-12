import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import authApi from '../../api/authApi';
import { rootNavigate } from '../../hooks/CustomRouter';
import { UserSiginIn } from '../../models';
import { authActions } from './authSlice';

function* handleLogin(payload: UserSiginIn) {
    try {
        (async () => {
            const res = await authApi.login(payload);
            console.log(res.data.token);
            localStorage.setItem('token', res.data.token);
        })();
        localStorage.setItem('username', payload.username);
        yield put(authActions.loginSuccess(payload));
        yield delay(2000);
        yield call(rootNavigate, '/user');
    } catch {
        yield put(authActions.loginFailed('Failed to login'));
    }
}

function* handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    // redirect to login page
    yield call(rootNavigate, '/auth/login');
}

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem('token'));
        if (!isLoggedIn) {
            const action: PayloadAction<UserSiginIn> = yield take(authActions.login.type);
            yield fork(handleLogin, action.payload);
        }

        yield take(authActions.logout.type);
        yield call(handleLogout);
    }
}

export default function* authSaga() {
    yield fork(watchLoginFlow);
}
