import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { UserSignIn, UserSignUp } from '../../models';

export interface AuthState {
    isRegistered: boolean;
    isVerified: boolean;
    isLoggedIn?: boolean;
    isLogging?: boolean;
    isFailed: boolean;
    currentUser?: UserSignIn;
}

const initialState: AuthState = {
    isRegistered: false,
    isVerified: false,
    isLoggedIn: false,
    isLogging: false,
    isFailed: false,
    currentUser: undefined,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register(state, action: PayloadAction<UserSignUp>) {
            state.isRegistered = true;
            state.isVerified = false;
        },
        registerSuccess(state, action: PayloadAction<UserSignUp>) {
            state.isRegistered = false;
        },
        registerFailed(state, action: PayloadAction<string>) {
            state.isRegistered = false;
        },
        verify(state, action: PayloadAction<string>) {
            state.isVerified = true;
        },

        login(state, action: PayloadAction<UserSignIn>) {
            state.isLogging = true;
        },
        loginSuccess(state, action: PayloadAction<UserSignIn>) {
            state.isLogging = false;
            state.isLoggedIn = true;
            state.isFailed = false;
            state.currentUser = action.payload;
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.isFailed = true;
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
const authSelectIsRegistered = (state: RootState) => state.auth.isRegistered;
const authSelectIsVerified = (state: RootState) => state.auth.isVerified;

const authSelectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
const authSelectIsLogging = (state: RootState) => state.auth.isLogging;
const authSelectIsFailed = (state: RootState) => state.auth.isFailed;
const authSelectCurrentUser = (state: RootState) => state.auth.currentUser;

// Reducer
const authReducer = authSlice.reducer;

export {
    authActions,
    authSelectIsLoggedIn,
    authSelectIsLogging,
    authSelectIsFailed,
    authSelectCurrentUser,
    authSelectIsRegistered,
    authSelectIsVerified,
};

export default authReducer;
