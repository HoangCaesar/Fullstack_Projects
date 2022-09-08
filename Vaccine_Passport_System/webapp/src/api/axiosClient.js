import axios from 'axios';
import queryString from 'query-string';
import { BASE_URL } from './configApi';

const getToken = () => localStorage.getItem('token');

const axiosClient = axios.create({
    baseUrl: BASE_URL,
    paramsSerializer: (params) => queryString.stringify({ params }),
});

axiosClient.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`,
        },
    };
});
axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) return response.data;
        return response;
    },
    (err) => {
        if (err.response) {
            console.error('Error! Network error!');
        }
        throw err;
    }
);

export default axiosClient;
