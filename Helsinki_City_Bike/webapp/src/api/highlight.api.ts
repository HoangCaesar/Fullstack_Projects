import { Highlight, HighlightsResponse } from '../models';
import axiosClient from './axiosClient';

// ==============================|| JOURNEY AXIOS - GET ALL ||============================== //

const highlightsApi = {
    getHighlights(): Promise<HighlightsResponse<Highlight>> {
        const url = '/highlights';
        return axiosClient.get(url);
    },
};

export default highlightsApi;
