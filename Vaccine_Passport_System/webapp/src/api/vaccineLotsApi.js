import axiosClient from './axiosClient';
import { BASE_URL, VACCINE_LOTS_ENDPOINT } from './configApi';

const vaccineLotsApi = {
    create: (params) => axiosClient.post(`${BASE_URL}${VACCINE_LOTS_ENDPOINT}`, params),
    getAll: () => axiosClient.get(`${BASE_URL}${VACCINE_LOTS_ENDPOINT}/get-all`),
    getOne: (id) => axiosClient.get(`${BASE_URL}${VACCINE_LOTS_ENDPOINT}/get-all/${id}`),
    update: (id, params) => axiosClient.put(`${BASE_URL}${VACCINE_LOTS_ENDPOINT}/get-all/${id}`, params),
    delete: (id) => axiosClient.delete(`${BASE_URL}${VACCINE_LOTS_ENDPOINT}/get-all/${id}`)
};

export default vaccineLotsApi;
