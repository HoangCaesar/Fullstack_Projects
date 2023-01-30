import createSagaMiddleware from '@redux-saga/core';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import rootSaga from './root.saga';

// project import
import drawerReducers from './reducers';
import highlightsReducer from '../pages/dashboard/dashboard.slice';
import journeyReducer from '../pages/journey-list/journeyList.slice';
import stationReducer from '../pages/station-list/stationList.slice';

// ==============================|| APP STORE - COMBINE ALL REDUCERS  ||============================== //

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        drawer: drawerReducers,
        highlights: highlightsReducer,
        journey: journeyReducer,
        stations: stationReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
