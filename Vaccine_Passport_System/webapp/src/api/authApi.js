import axiosClient from './axiosClient';
import { BASE_URL } from './configApi';

const authApi = {
    login: (params) => axiosClient.post(`${BASE_URL}/admin/login`, params),
    checkToken: () => axiosClient.post(`${BASE_URL}/admin/check-token`),
};

export default authApi;
