import axiosClient from './axiosClient';
import apiConfig from './apiConfig';

const authApi = {
    register: (params: any) => axiosClient.post(`${apiConfig.baseURL}user/`, params),
    login: (params: any) => axiosClient.post(`${apiConfig.baseURL}user/login`, params),
};

export default authApi;
