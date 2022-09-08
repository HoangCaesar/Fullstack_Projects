import axiosClient from './axiosClient';
import { BASE_URL } from './configApi';

const adminApi = {
    getSummary: () => axiosClient.get(`${BASE_URL}/admin/summary`),
};

export default adminApi;
