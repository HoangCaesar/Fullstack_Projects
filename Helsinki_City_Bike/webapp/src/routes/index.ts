import { useRoutes } from 'react-router-dom';
// project import
import LoginRoute from './LoginRoute';
import MainRoute from './MainRoute';

// ==============================|| ROUTES APP  ||============================== //

const RoutesApp = () => useRoutes([LoginRoute, MainRoute]);

export default RoutesApp;
