import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserLogin } from '../../models';

export interface AuthState {
    isLoggedIn: boolean;
    isLogging?: boolean;
    currentUser?: UserLogin;
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
        login(state, action: PayloadAction<UserLogin>) {
            state.isLogging = true;
        },
        loginSuccess(state, action: PayloadAction<UserLogin>) {
            state.isLoggedIn = true;
            state.isLogging = false;
            state.currentUser = action.payload;
        },
        loginFailed(state, action: PayloadAction<string>) {
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
const authSelectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
const authSelectIsLogging = (state: any) => state.auth.isLogging;

// Reducer
const authReducer = authSlice.reducer;

export { authActions, authSelectIsLoggedIn, authSelectIsLogging };
export default authReducer;
