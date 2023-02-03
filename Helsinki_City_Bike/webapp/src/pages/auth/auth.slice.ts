import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserLogin, UserSignup } from '../../models';
import { RootState } from '../../store';

export interface AuthState {
    isLoggedIn: boolean;
    isLogging?: boolean;
    isLoginFailed?: boolean;
    isRegistered?: boolean;
    currentUser?: UserLogin;
}

const initialState: AuthState = {
    isLoggedIn: false,
    isLogging: false,
    isLoginFailed: false,
    isRegistered: false,
    currentUser: undefined,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<UserLogin>) {
            state.isLoginFailed = false;
            state.isLogging = true;
        },
        register(state, action: PayloadAction<UserSignup>) {
            // do nothing
        },

        registerSuccess(state) {
            state.isRegistered = true;
        },
        registerFailed(state) {
            state.isRegistered = false;
        },
        registeredChangeState(state) {
            state.isRegistered = !state.isRegistered;
        },

        loginSuccess(state, action: PayloadAction<UserLogin>) {
            state.isLoggedIn = true;
            state.isLoginFailed = false;
            state.isLogging = false;
            state.currentUser = action.payload;
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.isLoginFailed = true;
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
const authSelectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
const authSelectIsLogging = (state: RootState) => state.auth.isLogging;
const authSelectIsLoginFailed = (state: RootState) => state.auth.isLoginFailed;
const authSelectIsRegistering = (state: RootState) => state.auth.isRegistered;
const authSelectIsRegistered = (state: RootState) => state.auth.isRegistered;

// Reducer
const authReducer = authSlice.reducer;

export {
    authActions,
    authSelectIsLoggedIn,
    authSelectIsLogging,
    authSelectIsLoginFailed,
    authSelectIsRegistering,
    authSelectIsRegistered,
};
export default authReducer;
