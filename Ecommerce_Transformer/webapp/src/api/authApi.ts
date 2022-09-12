import apiConfig from './apiConfig';
import axiosClient from './axiosClient';
import { UserSiginIn } from '../models';

const authApi = {
    register: (params: any) => axiosClient.post(`${apiConfig.baseURL}user/`, params),
    login: (params: UserSiginIn) => axiosClient.post(`${apiConfig.baseURL}user/login`, params),
    checktoken: () => axiosClient.post(`${apiConfig.baseURL}admin/check-token`),
};

export default authApi;
