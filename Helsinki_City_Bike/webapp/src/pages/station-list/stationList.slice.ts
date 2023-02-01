import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListParams, ListResponse, PaginationParams, Station } from '../../models';
import { RootState } from '../../store';

// ==============================|| STATION LIST SLICE  ||============================== //

export interface StationState {
    loading?: boolean;
    list: Station[];
    filter: ListParams;
    pagination: PaginationParams;
}

const initialState: StationState = {
    loading: false,
    list: [],
    filter: {
        _limit: 10,
        _page: 1,
    },
    pagination: {
        _limit: 10,
        _page: 1,
        _totalRows: 1,
    },
};

const stationSlice = createSlice({
    name: 'Station',
    initialState,
    reducers: {
        fetchStationList(state, action: PayloadAction<ListParams>) {
            state.loading = true;
        },
        fetchStationListSuccess(state, action: PayloadAction<ListResponse<Station>>) {
            state.loading = false;
            state.list = action.payload.data;
            state.pagination = action.payload.pagination;
        },
        fetchStationListFailed(state, action: PayloadAction<string>) {
            // Do nothing
            state.loading = false;
        },

        setFilter(state, action: PayloadAction<ListParams>) {
            state.filter = action.payload;
        },
        setFilterWithDebounce(state, action: PayloadAction<ListParams>) {
            // do nothing
        },
    },
});

// reducers
const stationReducer = stationSlice.reducer;

// Actions
const stationActions = stationSlice.actions;

// selectors
const selectStationList = (state: RootState) => state.stations.list;
const selectStationLoading = (state: RootState) => state.stations.loading;
const selectStationFilter = (state: RootState) => state.stations.filter;
const selectStationPagination = (state: RootState) => state.stations.pagination;

export {
    stationActions,
    selectStationList,
    selectStationLoading,
    selectStationFilter,
    selectStationPagination,
};

export default stationReducer;
