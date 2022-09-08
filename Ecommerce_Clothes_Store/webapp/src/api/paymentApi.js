import { BASE_URL } from './configApi';
import axiosClient from './axiosClient';

const paymentApi = {
    postToken: (params) => axiosClient.post(`${BASE_URL}/payment`, params)
};

export default paymentApi;
