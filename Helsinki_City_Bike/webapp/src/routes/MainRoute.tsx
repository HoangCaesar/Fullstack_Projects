import { lazy } from 'react';
import { Loadable } from '../components';

// Project import
import MainLayout from '../layout/main-layout/MainLayout';

// render
const JourneyList = Loadable(lazy(() => import('../pages/journey-list/JourneyList')));

// ==============================|| MAIN ROUTE  ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <div>Hello</div>,
        },
        {
            path: '/journeylist',
            element: <JourneyList />,
        },
    ],
};

export default MainRoutes;
