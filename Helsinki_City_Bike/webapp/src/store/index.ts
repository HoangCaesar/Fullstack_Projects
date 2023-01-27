import createSagaMiddleware from '@redux-saga/core';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import rootSaga from './rootSaga';

// project import
import drawerReducers from './reducers';
import journeyReducer from '../pages/journey-list/journeyList.slice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        drawer: drawerReducers,
        journey: journeyReducer,
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
