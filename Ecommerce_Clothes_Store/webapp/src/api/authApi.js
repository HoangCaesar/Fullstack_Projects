import axiosClient from './axiosClient';
import { BASE_URL } from './configApi';

const authApi = {
    userLogin: (params) => axiosClient.post(`${BASE_URL}/user/login`, params),
    adminLogin: (params) => axiosClient.post(`${BASE_URL}/admin/login`, params),
    checkToken: () => axiosClient.post(`${BASE_URL}/admin/check-token`),
};

export default authApi;
