// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';
import MenuItems from '../../models/menuItems';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined,
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support: MenuItems = {
    id: 'support',
    title: 'Support',
    type: 'group',
    children: [
        {
            id: 'contact',
            title: 'Contact',
            type: 'item',
            url: 'https://www.linkedin.com/in/vuhoangnguyen58/',
            icon: icons.QuestionOutlined,
            external: true,
            target: true,
        },
    ],
};

export default support;
