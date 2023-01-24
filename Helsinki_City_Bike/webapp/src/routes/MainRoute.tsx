// Project import
import MainLayout from '../layout/main-layout/MainLayout';

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
            element: <div>Hello</div>,
        }
    ]
};

export default MainRoutes;
