import { ListParams, ListResponse, Station } from '../models';
import axiosClient from './axiosClient';

// ==============================|| STATION AXIOS - GET ALL ||============================== //

const stationListApi = {
    getList(params: ListParams): Promise<ListResponse<Station>> {
        const url = '/stationlist';
        return axiosClient.get(url, { params });
    },
    getOne(id: string): Promise<Station> {
        const url = `/stationlist/${id}`;
        return axiosClient.get(url);
    },
};

export default stationListApi;
