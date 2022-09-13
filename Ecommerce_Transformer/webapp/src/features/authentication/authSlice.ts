import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { UserSignIn, UserSignUp} from '../../models';

export interface AuthState {
    isLoggedIn?: boolean;
    isLogging?: boolean;
    currentUser?: UserSignIn;
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
        register(state, action: PayloadAction<UserSignUp>) {
            state.isLogging = true;
        },
        login(state, action: PayloadAction<UserSignIn>) {
            state.isLogging = true;
        },
        loginSuccess(state, action: PayloadAction<UserSignIn>) {
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
