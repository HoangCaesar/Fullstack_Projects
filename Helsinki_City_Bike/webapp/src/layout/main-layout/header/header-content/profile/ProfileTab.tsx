import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// assets
import {
    EditOutlined, LogoutOutlined, ProfileOutlined, UserOutlined
} from '@ant-design/icons';

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

interface ProfileTabProps {
    handleLogout: () => void;
}

const ProfileTab = ({ handleLogout }: ProfileTabProps) => {
    const theme = useTheme();

    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => {
        setSelectedIndex(index);
    };

    return (
        <List
            component="nav"
            sx={{
                p: 0,
                '& .MuiListItemIcon-root': { minWidth: 32, color: theme.palette.grey[500] },
            }}
        >
            <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
            >
                <ListItemIcon>
                    <EditOutlined />
                </ListItemIcon>
                <ListItemText primary="Edit Profile (Not available yet)" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
            >
                <ListItemIcon>
                    <UserOutlined />
                </ListItemIcon>
                <ListItemText primary="View Profile (Not available yet)" />
            </ListItemButton>

            <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
            >
                <ListItemIcon>
                    <ProfileOutlined />
                </ListItemIcon>
                <ListItemText primary="Social Profile (Not available yet)" />
            </ListItemButton>
            <ListItemButton selected={selectedIndex === 2} onClick={handleLogout}>
                <ListItemIcon>
                    <LogoutOutlined />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItemButton>
        </List>
    );
};

ProfileTab.propTypes = {
    handleLogout: PropTypes.func,
};

export default ProfileTab;
