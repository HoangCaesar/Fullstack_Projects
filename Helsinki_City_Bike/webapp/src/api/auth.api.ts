import { LoginResponse, UserLogin, UserSignup, SignUpResponse, Token } from '../models';
import axiosClient from './axiosClient';

// ==============================|| STATION AXIOS - GET ALL ||============================== //

const authApi = {
    login(data: UserLogin): Promise<LoginResponse> {
        const url = '/user/login';
        return axiosClient.post(url, data);
    },
    register(data: UserSignup): Promise<SignUpResponse> {
        const url = `/user/register`;
        return axiosClient.post(url, data);
    },
    checkAccessToken(): Promise<Token> {
        const url = `/user/check-accessToken`;
        return axiosClient.post(url);
    },
    checkRefreshToken(refreshToken: string): Promise<Token> {
        const url = `/user/check-refreshToken`;
        return axiosClient.post(url, {refreshToken});
    },
    logout(refreshToken: string): Promise<void> {
        const url = `/user/logout`;
        return axiosClient.post(url, {refreshToken});
    },
};

export default authApi;
