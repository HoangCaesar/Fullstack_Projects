import apiConfig from './apiConfig';
import axiosClient from './axiosClient';
import { UserSignIn, UserSignUp} from '../models';

const authApi = {
    register: (params: UserSignUp) => axiosClient.post(`${apiConfig.baseURL}user/`, params),
    login: (params: UserSignIn) => axiosClient.post(`${apiConfig.baseURL}user/login`, params),
    checktoken: () => axiosClient.post(`${apiConfig.baseURL}admin/check-token`),
};

export default authApi;
