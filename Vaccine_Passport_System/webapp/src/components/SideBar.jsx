import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText, Toolbar
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const sideBarItems = [
    {
        text: 'Dashboard',
        path: '/',
        icon: <GridViewOutlinedIcon />,
    },
    {
        text: 'User',
        path: '/user',
        icon: <PersonOutlineOutlinedIcon />,
    },
    {
        text: 'Place',
        path: '/place',
        icon: <PlaceOutlinedIcon />,
    },
    {
        text: 'Vaccine',
        path: '/vaccine',
        icon: <HealthAndSafetyOutlinedIcon />,
    },
    {
        text: 'QR Scan',
        path: '/qr-scan',
        icon: <QrCodeScannerOutlinedIcon />,
    },
];

const SideBar = () => {
    const location = useLocation();
    const sideBarWidth = 300;
    const [acctiveIndex, setAcctiveIndex] = useState();

    useEffect(() => {
        const acctiveItem = sideBarItems.findIndex(
            (item) => window.location.pathname.split('/')[1] === item.path.split('/')[1]
        );
        setAcctiveIndex(acctiveItem);
    }, [location]);

    return (
        <Drawer
            container={window.document.body}
            variant="permanent"
            sx={{
                width: sideBarWidth,
                height: '100vh',
                boxShadow: '0px 1px 4px 1px rgb(0 0 0 / 12%)',
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: sideBarWidth,
                    borderRight: 0,
                },
            }}
            open={true}
        >
            <Toolbar />
            <List>

                
                {sideBarItems.map((item, index) => (
                    <ListItemButton
                        key={`sidebar-key-${index}`}
                        selected={index === acctiveIndex}
                        component={Link}
                        to={item.path}
                        sx={{
                            width: 'calc(100% -20px)',
                            margin: '5px auto',
                            borderRadius: '10px',
                            '&.Mui-selected': {
                                color: 'blue'
                            },
                            '&.Mui-seleted:hover': {
                                backgroundColor: 'DodgerBlue'
                            }
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                color: index === acctiveIndex && 'blue',
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>

                        <ListItemText
                            primary={item.text}
                            sx={{
                                '& span': {
                                    fontWeight: index === acctiveIndex && '500',
                                },
                            }}
                        />
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    );
};

export default SideBar;
