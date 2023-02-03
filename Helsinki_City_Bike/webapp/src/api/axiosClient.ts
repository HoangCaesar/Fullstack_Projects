import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Project import
import { BASE_URL } from './axios.constant';

// helpers
const getToken = () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    return { accessToken, refreshToken };
};

// ==============================|| MAIN AXIOS - CONFIG AXIOS ||============================== //

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use((config: AxiosRequestConfig | any) => {
    return {
        ...config,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken().accessToken}`,
        },
    };
});

axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    (error) => {
        return error;
    }
);

export default axiosClient;
