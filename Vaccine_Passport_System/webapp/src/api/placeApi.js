import axiosClient from './axiosClient';
import { BASE_URL, PLACE_ENDPOINT } from './configApi';

const vaccineApi = {
    create: (params) => axiosClient.post(`${BASE_URL}${PLACE_ENDPOINT}`, params),
    getAll: () => axiosClient.get(`${BASE_URL}${PLACE_ENDPOINT}`),
    getOne: (id) => axiosClient.get(`${BASE_URL}${PLACE_ENDPOINT}/${id}`),
    update: (id, params) => axiosClient.put(`${BASE_URL}${PLACE_ENDPOINT}/${id}`, params),
    delete: (id) => axiosClient.delete(`${BASE_URL}${PLACE_ENDPOINT}/${id}`)
};

export default vaccineApi;
