// material-ui
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { GithubOutlined } from '@ant-design/icons';

// project import
import Profile from './profile/Profile';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
            {!matchesXs && <Profile />}
        </>
    );
};

export default HeaderContent;
