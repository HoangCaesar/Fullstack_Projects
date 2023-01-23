import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// material-ui
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { Grid, Typography } from '@mui/material';

// project imports
import MainCard from '../MainCard';
import { MenuList } from '../../menu-items';
import MenuItems, { ChildrenOfMenuItems } from '../../models/menuItems';

// ==============================|| BREADCRUMBS ||============================== //

interface BreadcrumbsProps {
    navigation: MenuList;
    title: boolean;
}

const Breadcrumbs = ({ navigation, title, ...others }: BreadcrumbsProps) => {
    const location = useLocation();
    const [main, setMain] = useState<MenuItems>();
    const [item, setItem] = useState<ChildrenOfMenuItems>();

    // set active item state
    const getCollapse = (menu: any) => {
        if (menu.children) {
            menu.children.filter((collapse: ChildrenOfMenuItems) => {
                if (collapse.type && collapse.type === 'collapse') {
                    getCollapse(collapse);
                } else if (collapse.type && collapse.type === 'item') {
                    if (location.pathname === collapse.url) {
                        setMain(menu);
                        setItem(collapse);
                    }
                }
                return false;
            });
        }
    };

    useEffect(() => {
        navigation?.items?.map((menu: MenuItems) => {
            if (menu.type && menu.type === 'group') {
                getCollapse(menu);
            }
            return false;
        });
    });

    // only used for component demo breadcrumbs
    if (location.pathname === '/breadcrumbs') {
        location.pathname = '/dashboard/analytics';
    }

    let mainContent;
    let itemContent;
    let breadcrumbContent = <Typography />;
    let itemTitle: string | undefined = '';

    // collapse item
    if (main && main.type === 'collapse') {
        mainContent = (
            <Typography
                component={Link}
                to={document.location.pathname}
                variant="h6"
                sx={{ textDecoration: 'none' }}
                color="textSecondary"
            >
                {main.title}
            </Typography>
        );
    }

    // items
    if (item && item.type === 'item') {
        itemTitle = item.title;
        itemContent = (
            <Typography variant="subtitle1" color="textPrimary">
                {itemTitle}
            </Typography>
        );

        // main
        if (item.breadcrumbs !== false) {
            breadcrumbContent = (
                <MainCard
                    border={false}
                    sx={{ mb: 3, bgcolor: 'transparent' }}
                    {...others}
                    content={false}
                >
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        spacing={1}
                    >
                        <Grid item>
                            <MuiBreadcrumbs aria-label="breadcrumb">
                                <Typography
                                    component={Link}
                                    to="/"
                                    color="textSecondary"
                                    variant="h6"
                                    sx={{ textDecoration: 'none' }}
                                >
                                    Home
                                </Typography>
                                {mainContent}
                                {itemContent}
                            </MuiBreadcrumbs>
                        </Grid>
                        {title && (
                            <Grid item sx={{ mt: 2 }}>
                                <Typography variant="h5">{item.title}</Typography>
                            </Grid>
                        )}
                    </Grid>
                </MainCard>
            );
        }
    }

    return breadcrumbContent;
};

Breadcrumbs.propTypes = {
    navigation: PropTypes.object,
    title: PropTypes.bool,
};

export default Breadcrumbs;
