import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserLogin } from '../../models';
import { RootState } from '../../store';

export interface AuthState {
    isLoggedIn: boolean;
    isLogging?: boolean;
    isLoginFailed?: boolean;
    currentUser?: UserLogin;
}

const initialState: AuthState = {
    isLoggedIn: false,
    isLogging: false,
    isLoginFailed: false,
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
        register(state, action: PayloadAction<UserLogin>) {
            // do nothing
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

// Reducer
const authReducer = authSlice.reducer;

export { authActions, authSelectIsLoggedIn, authSelectIsLogging, authSelectIsLoginFailed };
export default authReducer;
