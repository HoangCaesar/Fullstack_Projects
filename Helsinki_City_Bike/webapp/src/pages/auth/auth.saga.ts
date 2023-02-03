import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take, takeLatest } from 'redux-saga/effects';
import { authActions } from './auth.slice';
import { UserLogin, LoginResponse, UserSignup, SignUpResponse } from '../../models';
import authApi from '../../api/auth.api';

function* register(action: PayloadAction<UserSignup>) {
    try {
        const response: SignUpResponse = yield call(authApi.register, action.payload);
        console.log(response);
    } catch (error) {
        yield put(authActions.loginFailed('Failed to login'));
    }
}

function* handleLogin(payload: UserLogin) {
    try {
        const response: LoginResponse = yield call(authApi.login, payload);
        console.log(response);
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
    yield takeLatest(authActions.register, register);
}

export default authSaga;