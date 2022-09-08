import axios from 'axios';
import { BASE_URL } from './configApi';
import queryString from 'query-string';

const getToken = () => localStorage.getItem('token');

const axiosClient = axios.create({
    baseURL: BASE_URL,
    paramsSerializer: (params) => queryString.stringify({ params }),
});

axiosClient.interceptors.request.use(
    (config) => {
        return {
            ...config,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
        };
    },
    (err) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) return response.data;
        else return response;
    },
    (err) => {
        if (err.response) console.error('Error! Network error!');
        throw err;
    }
);

export default axiosClient;
