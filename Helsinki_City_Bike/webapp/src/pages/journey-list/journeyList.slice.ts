import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Journey, ListParams, ListResponse, PaginationParams } from '../../models';
import { RootState } from '../../store';

// ==============================|| JOURNEY LIST SLICE  ||============================== //

export interface JourneyState {
    loading?: boolean;
    list: Journey[];
    filter: ListParams;
    pagination: PaginationParams;
}

const initialState: JourneyState = {
    loading: false,
    list: [],
    filter: {
        _month: 5,
        _limit: 10,
        _page: 1,
    },
    pagination: {
        _month: 5,
        _limit: 10,
        _page: 1,
        _totalRows: 1,
    },
};

const journeySlice = createSlice({
    name: 'journey',
    initialState,
    reducers: {
        fetchJourneyList(state, action: PayloadAction<ListParams>) {
            state.loading = true;
        },
        fetchJourneyListSuccess(state, action: PayloadAction<ListResponse<Journey>>) {
            state.loading = false;
            state.list = action.payload.data;
            state.pagination = action.payload.pagination;
        },
        fetchJourneyListFailed(state, action: PayloadAction<string>) {
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
const journeyReducer = journeySlice.reducer;

// Actions
const journeyActions = journeySlice.actions;

// selectors
const selectJourneyList = (state: RootState) => state.journey.list;
const selectJourneyLoading = (state: RootState) => state.journey.loading;
const selectJourneyFilter = (state: RootState) => state.journey.filter;
const selectJourneyPagination = (state: RootState) => state.journey.pagination;

export {
    journeyActions,
    selectJourneyList,
    selectJourneyLoading,
    selectJourneyFilter,
    selectJourneyPagination,
};

export default journeyReducer;
