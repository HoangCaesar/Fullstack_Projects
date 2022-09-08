import { loginSuccess, loginFailure, loginStart } from './userRedux';
import authApi from '../api/authApi';

export const userLogin = async (dispatch,user) => {
    dispatch(loginStart());
    try {
        const res = await authApi.userLogin(user);
        console.log(res);
        dispatch(loginSuccess(res));
    } catch (err) {
        dispatch(loginFailure());
    }
};
