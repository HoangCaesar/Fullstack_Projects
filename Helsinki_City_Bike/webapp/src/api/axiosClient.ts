import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Project import
import { BASE_URL } from './axios.constant';

// ==============================|| MAIN AXIOS - CONFIG AXIOS ||============================== //

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    (error) => {
        throw error;
    }
);

export default axiosClient;
