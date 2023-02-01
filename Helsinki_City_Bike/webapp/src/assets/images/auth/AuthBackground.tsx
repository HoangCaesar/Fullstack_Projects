//  Material UI
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// Project import
import BackgroundImage from '../AuthBackground.jpg';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                filter: 'blur(18px)',
                zIndex: -1,
                bottom: 0,
            }}
        >
            <img src={BackgroundImage} alt="Background Image" width="100%" height="100%" />
        </Box>
    );
};

export default AuthBackground;
