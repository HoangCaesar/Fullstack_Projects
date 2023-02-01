import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Highlight, HighlightsResponse } from '../../models';
import { RootState } from '../../store';

// ==============================|| JOURNEY LIST SLICE  ||============================== //

export interface DashboardState {
    loading?: boolean;
    list: Highlight[];
}

const initialState: DashboardState = {
    loading: false,
    list: [],
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        fetchHighlightsList(state) {
            state.loading = true;
        },
        fetchHighlightsListSuccess(state, action: PayloadAction<HighlightsResponse<Highlight>>) {
            state.loading = false;
            state.list = action.payload.data;
        },
        fetchHighlightsListFailed(state, action: PayloadAction<string>) {
            // Do nothing
            state.loading = false;
        },
    },
});

// reducers
const highlightsReducer = dashboardSlice.reducer;

// Actions
const highlightsActions = dashboardSlice.actions;

// selectors
const selectHighlightsList = (state: RootState) => state.highlights.list;
const selectHighlightsLoading = (state: RootState) => state.highlights.loading;

export { highlightsActions, selectHighlightsList, selectHighlightsLoading };

export default highlightsReducer;
