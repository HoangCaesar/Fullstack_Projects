import { ListParams, ListResponse, Journey } from '../models';
import axiosClient from './axiosClient';

const journeyListApi = {
    getAll(params: ListParams): Promise<ListResponse<Journey>> {
        const url = '/journeylist';
        return axiosClient.get(url, { params });
    },
};

export default journeyListApi;
