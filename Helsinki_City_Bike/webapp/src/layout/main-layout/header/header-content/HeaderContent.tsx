import { useEffect, useState } from 'react';
// material-ui
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import authHandler from '../../../../utils/authHandler';
import MobileSection from './MobileSection';
import Notification from './Notification';
import Profile from './profile/Profile';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        (async () => {
            const isTokenAvailable = await authHandler();
            if (isTokenAvailable) setIsLoggedIn(true);
        })();
    }, []);
    return isLoggedIn ? (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
            <Notification />
            {!matchesXs && <Profile />}
            {matchesXs && <MobileSection />}
        </Box>
    ) : (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
            {/* <Notification /> */}
            {/* {!matchesXs && <Profile />} */}
            {/* {matchesXs && <MobileSection />} */}
        </Box>
    );
};

export default HeaderContent;
