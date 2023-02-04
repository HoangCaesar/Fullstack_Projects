import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take, takeLatest } from 'redux-saga/effects';
import { authActions } from './auth.slice';
import { UserLogin, LoginResponse, UserSignup, SignUpResponse } from '../../models';
import authApi from '../../api/auth.api';

function* register(action: PayloadAction<UserSignup>) {
    try {
        const response: SignUpResponse = yield call(authApi.register, action.payload);

        if (response.status !== 'success') yield put(authActions.registerFailed());
        yield put(authActions.registerSuccess());
        yield delay(10000);
        yield put(authActions.registeredChangeState());
    } catch (error) {
        yield put(authActions.registerFailed());
    }
}

function* handleLogin(payload: UserLogin) {
    try {
        const response: LoginResponse = yield call(authApi.login, payload);
        if (!response.refreshToken) yield put(authActions.loginFailed());
        yield put(authActions.loginSuccess(response));
        localStorage.setItem('username', response.name);
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
    } catch (error) {
        yield put(authActions.loginFailed());
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
    yield takeLatest(authActions.register, register);
}

export default authSaga;
