import { Journey, ListParams, ListResponse } from '../models';
import axiosClient from './axiosClient';

// ==============================|| JOURNEY AXIOS - GET ALL ||============================== //

const journeyListApi = {
    getAll(params: ListParams): Promise<ListResponse<Journey>> {
        const url = '/journeylist';
        return axiosClient.get(url, { params });
    },
};

export default journeyListApi;
