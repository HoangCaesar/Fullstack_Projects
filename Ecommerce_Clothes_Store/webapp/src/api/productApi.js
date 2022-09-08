import { BASE_URL } from './configApi';
import axiosClient from './axiosClient';

const productApi = {
    getAll: (query) => axiosClient.get(`${BASE_URL}/product${query}`),
    getOne: (id) => axiosClient.get(`${BASE_URL}/product/${id}`),
};

export default productApi;
