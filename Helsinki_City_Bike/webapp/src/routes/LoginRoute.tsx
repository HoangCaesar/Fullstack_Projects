// project import
import MiniLayout from '../layout/mini-layout/MiniLayout';

// render - login

// ==============================|| LOGIN ROUTE  ||============================== //

const LoginRoute = {
    path: '/',
    element: <MiniLayout />,
    children: [
        {
            path: '/',
            element: <div>Hello</div>,
        },
    ],
};

export default LoginRoute;
