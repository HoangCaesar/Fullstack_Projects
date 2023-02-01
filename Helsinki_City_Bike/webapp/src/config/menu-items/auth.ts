// assets
import { UserAddOutlined, FormOutlined } from '@ant-design/icons';
import MenuItems from '../../models/menuItems';

// icons
const icons = {
    FormOutlined,
    UserAddOutlined,
};

// ==============================|| MENU ITEMS - AUTH ||============================== //

const auth: MenuItems = {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    children: [
        {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: '/register',
            icon: icons.UserAddOutlined,
            target: false,
        },
        {
            id: 'login',
            title: 'Log In',
            type: 'item',
            url: '/login',
            icon: icons.FormOutlined,
            target: false,
        },
    ],
};

export default auth;
