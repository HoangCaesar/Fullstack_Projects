// project import
import pages from './pages';
import dashboard from './dashboard';
import support from './support';
import MenuItems from '../../models/menuItems';

// ==============================|| MENU ITEMS ||============================== //

export interface MenuList {
    items: MenuItems[];
}

const menuItems: MenuList = {
    items: [dashboard, pages, support],
};

export default menuItems;
