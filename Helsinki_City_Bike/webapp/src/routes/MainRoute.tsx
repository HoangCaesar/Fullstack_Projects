import { lazy } from 'react';
import { Loadable } from '../components';

// Project import
import MainLayout from '../layout/main-layout/MainLayout';

// render
const DashBoard = Loadable(lazy(() => import('../pages/dashboard/DashBoard')));
const JourneyList = Loadable(lazy(() => import('../pages/journey-list/JourneyList')));
const StationList = Loadable(lazy(() => import('../pages/station-list/StationList')));

// ==============================|| MAIN ROUTE  ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashBoard />,
        },
        {
            path: '/dashboard/default',
            element: <DashBoard />,
        },
        {
            path: '/journeylist',
            element: <JourneyList />,
        },
        {
            path: '/stationlist',
            element: <StationList />,
        },
    ],
};

export default MainRoutes;
