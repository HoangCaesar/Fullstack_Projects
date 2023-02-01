// assets
import { DashboardOutlined } from '@ant-design/icons';
import MenuItems from '../../models/menuItems';

// icons
const icons = {
    DashboardOutlined,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard: MenuItems = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardOutlined,
            breadcrumbs: false,
        },
    ],
};

export default dashboard;
