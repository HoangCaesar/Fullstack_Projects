// project import
import MenuItems from '../../models/menuItems';
import dashboard from './dashboard';
import pages from './pages';
import auth from './auth';
import support from './support';

// ==============================|| MENU ITEMS ||============================== //

export interface MenuList {
    items: MenuItems[];
}

let menuItems: MenuList = {
    items: [dashboard, pages, auth, support],
};

export default menuItems;
