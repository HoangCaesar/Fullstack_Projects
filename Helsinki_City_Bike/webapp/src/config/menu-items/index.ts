// project import
import MenuItems from '../../models/menuItems';
import dashboard from './dashboard';
import pages from './pages';
import support from './support';

// ==============================|| MENU ITEMS ||============================== //

export interface MenuList {
    items: MenuItems[];
}

const menuItems: MenuList = {
    items: [dashboard, pages, support],
};

export default menuItems;
