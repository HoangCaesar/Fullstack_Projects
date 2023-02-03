import { LoginResponse, UserLogin, UserSignup, SignUpResponse } from '../models';
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
};

export default authApi;
