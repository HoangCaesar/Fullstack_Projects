// Material UI
import { Stack, Typography } from '@mui/material';

// assets
import logo from '../../assets/images/logo.png';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    return (
        <Stack direction="row" alignItems="flex-start" sx={{ width: '150px'}}>
            <img src={logo} alt="Prima Power" width="50%"/>
        </Stack>
    );
};

export default Logo;
