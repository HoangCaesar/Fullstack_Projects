import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// assets
import {
    CommentOutlined,
    LockOutlined,
    QuestionCircleOutlined,
    UserOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';

// ==============================|| HEADER PROFILE - SETTING TAB ||============================== //

const SettingTab = () => {
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
                    <QuestionCircleOutlined />
                </ListItemIcon>
                <ListItemText primary="Support (Not available yet)" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
            >
                <ListItemIcon>
                    <UserOutlined />
                </ListItemIcon>
                <ListItemText primary="Account Settings (Not available yet)" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
            >
                <ListItemIcon>
                    <LockOutlined />
                </ListItemIcon>
                <ListItemText primary="Privacy Center (Not available yet)" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
            >
                <ListItemIcon>
                    <CommentOutlined />
                </ListItemIcon>
                <ListItemText primary="Feedback (Not available yet)" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 4}
                onClick={(event) => handleListItemClick(event, 4)}
            >
                <ListItemIcon>
                    <UnorderedListOutlined />
                </ListItemIcon>
                <ListItemText primary="History (Not available yet)" />
            </ListItemButton>
        </List>
    );
};

export default SettingTab;
