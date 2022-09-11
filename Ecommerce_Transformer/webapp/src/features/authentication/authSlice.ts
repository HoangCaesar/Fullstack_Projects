import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { UserLoggingIn } from '../../models';

export interface AuthState {
    isLoggedIn?: boolean;
    isLogging?: boolean;
    currentUser?: UserLoggingIn;
}

export interface LoginPayload {
    email: string;
    username: string;
    password: string;
}

const initialState: AuthState = {
    isLoggedIn: false,
    isLogging: false,
    currentUser: undefined,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) {
            state.isLogging = true;
        },
        loginSuccess(state, action: PayloadAction<LoginPayload>) {
            state.isLogging = false;
            state.isLoggedIn = true;
            state.currentUser = action.payload;
        },
        loginFailed(state, action: PayloadAction<LoginPayload>) {
            state.isLogging = false;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.currentUser = undefined;
        },
    },
});

// Actions
const authActions = authSlice.actions;

// Selectors
const authSelecIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
const authSelecIsLogging = (state: RootState) => state.auth.isLoggedIn;

// Reducer
const authReducer = authSlice.reducer;

export { authActions, authSelecIsLoggedIn, authSelecIsLogging };

export default authReducer;
