import { LoginResponse, UserLogin } from '../models';
import axiosClient from './axiosClient';

// ==============================|| STATION AXIOS - GET ALL ||============================== //

const authApi = {
    login(params: UserLogin): Promise<LoginResponse> {
        const url = '/user/login';
        return axiosClient.get(url, { params });
    },
    // register(id: string): Promise<Station> {
    //     const url = `/user/register`;
    //     return axiosClient.get(url);
    // },
};

export default authApi;
