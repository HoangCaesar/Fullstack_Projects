import { lazy } from 'react';
import { Loadable } from '../components';

// project import
import MiniLayout from '../layout/mini-layout/MiniLayout';

// render - login
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));

// ==============================|| LOGIN ROUTE  ||============================== //

const LoginRoute = {
    path: '/',
    element: <MiniLayout />,
    children: [
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/register',
            element: <Register />,
        },
    ],
};

export default LoginRoute;
