import axios from 'axios';
import queryString from 'query-string';
import apiConfig from './apiConfig';

const getToken = () => localStorage.getItem('token');

const axiosClient = axios.create({
    baseURL: apiConfig.baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify({ params }),
});

axiosClient.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) return response.data;
        else return response;
    },
    (err) => {
        if (err.response) {
            console.error(err.response);
        }
        throw err;
    }
);

export default axiosClient;
