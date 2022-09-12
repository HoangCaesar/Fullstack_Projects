import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { UserSiginIn } from '../../models';

export interface AuthState {
    isLoggedIn?: boolean;
    isLogging?: boolean;
    currentUser?: UserSiginIn;
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
        login(state, action: PayloadAction<UserSiginIn>) {
            state.isLogging = true;
        },
        loginSuccess(state, action: PayloadAction<UserSiginIn>) {
            state.isLogging = false;
            state.isLoggedIn = true;
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
const authSelecIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
const authSelecIsLogging = (state: RootState) => state.auth.isLogging;
const authSelectCurrentUser = (state: RootState) => state.auth.currentUser;

// Reducer
const authReducer = authSlice.reducer;

export { authActions, authSelecIsLoggedIn, authSelecIsLogging, authSelectCurrentUser };

export default authReducer;
