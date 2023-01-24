// material-ui
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { GithubOutlined } from '@ant-design/icons';

// project import
import Profile from './profile/Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
            <Notification />
            {!matchesXs && <Profile />}
            {matchesXs && <MobileSection />}
        </Box>
    );
};

export default HeaderContent;
