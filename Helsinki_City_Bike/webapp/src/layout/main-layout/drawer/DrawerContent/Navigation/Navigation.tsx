import { useEffect, useState } from 'react';

// material-ui
import { Box, Typography } from '@mui/material';

// project import
import NavGroup from './NavGroup';
import menuItem, { MenuList } from '../../../../../config/menu-items';
import MenuItems from '../../../../../models/menuItems';
import authHandler from '../../../../../utils/authHandler';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
    const [menu, setMenu] = useState<MenuList | null>(null);
    useEffect(() => {
        (async () => {
            const isTokenAvailable = await authHandler();
            if (isTokenAvailable) {
                menuItem.items.splice(2, 1);
                setMenu(menuItem);
                return;
            }
            menuItem.items.splice(3, 1);
            setMenu(menuItem);
            return;
        })();
    }, []);

    const navGroups = menu?.items.map((item: MenuItems) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Fix - Navigation Group
                    </Typography>
                );
        }
    });

    return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};

export default Navigation;
