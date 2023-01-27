import { ListParams, ListResponse, Journey } from '../models';
import axiosClient from './axiosClient';

const studentApi = {
    getAll(params: ListParams): Promise<ListResponse<Journey>> {
        const url = '/students';
        return axiosClient.get(url, { params });
    },
};

export default studentApi;
