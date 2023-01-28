import { lazy } from 'react';
import { Loadable } from '../components';

// Project import
import MainLayout from '../layout/main-layout/MainLayout';

// render
const JourneyList = Loadable(lazy(() => import('../pages/journey-list/JourneyList')));
const DashBoard = Loadable(lazy(() => import('../pages/dashboard/DashBoard')));

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
    ],
};

export default MainRoutes;
