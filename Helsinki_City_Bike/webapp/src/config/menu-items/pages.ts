// assets
import { UnorderedListOutlined, AimOutlined } from '@ant-design/icons';
import MenuItems from '../../models/menuItems';

// icons
const icons = {
    UnorderedListOutlined,
    AimOutlined,
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages: MenuItems = {
    id: 'year',
    title: 'Year Highlights',
    type: 'group',
    children: [
        {
            id: 'journeylist',
            title: 'Journey List',
            type: 'item',
            url: '/journeylist',
            icon: icons.UnorderedListOutlined,
            target: false,
        },
        {
            id: 'stationlist',
            title: 'Station List',
            type: 'item',
            url: '/stationlist',
            icon: icons.AimOutlined,
            target: false,
        },
    ],
};

export default pages;
