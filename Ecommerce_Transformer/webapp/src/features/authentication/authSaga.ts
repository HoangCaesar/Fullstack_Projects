import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import authApi from '../../api/authApi';
import { rootNavigate } from '../../hooks/CustomRouter';
import { UserSignIn, UserSignUp} from '../../models';
import { authActions } from './authSlice';

function* handleLogin(payload: UserSignIn) {
    try {
        yield delay(2000);
        (async () => {
            const res = await authApi.login(payload);
            localStorage.setItem('token', res.data.token);
        })();
        localStorage.setItem('username', payload.username);
        yield put(authActions.loginSuccess(payload));
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

function* handleRegister() {
    const action: PayloadAction<UserSignUp> = yield take(authActions.register.type);
    try {
        yield delay(2000);
        (async () => {
            const res = await authApi.register(action.payload);
        })();
        yield put(authActions.registerSuccess(action.payload));
    }
    catch (err) {
        yield put(authActions.registerFailed('Failed to login'));
    }
}

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem('token'));
        if (!isLoggedIn) {
            const action: PayloadAction<UserSignIn> = yield take(authActions.login.type);
            yield fork(handleLogin, action.payload);
        }

        yield take(authActions.logout.type);
        yield call(handleLogout);
    }
}

export default function* authSaga() {
    yield fork(watchLoginFlow);
    yield fork(handleRegister);
}
