import { BASE_URL } from './configApi';
import axiosClient from './axiosClient';

const orderApi = {
    createOrder: (params) => axiosClient.post(`${BASE_URL}/order`, params)
};

export default orderApi;
