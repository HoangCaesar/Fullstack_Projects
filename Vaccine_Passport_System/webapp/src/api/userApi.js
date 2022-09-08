import axiosClient from './axiosClient';
import { BASE_URL, USER_ENDPOINT } from './configApi';

const userApi = {
    create: (params) => axiosClient.post(`${BASE_URL}${USER_ENDPOINT}`, params),
    getAll: () => axiosClient.get(`${BASE_URL}${USER_ENDPOINT}`),
    getOne: (id) => axiosClient.get(`${BASE_URL}${USER_ENDPOINT}/${id}`),
    update: (id, params) => axiosClient.put(`${BASE_URL}${USER_ENDPOINT}/${id}`, params),
    delete: (id) => axiosClient.delete(`${BASE_URL}${USER_ENDPOINT}/${id}`),
    vaccinated: (params) => axiosClient.post(`${BASE_URL}${USER_ENDPOINT}/vaccinated`, params)
};

export default userApi;
