// Material UI
import { Stack } from '@mui/material';

// assets
import logo from '../../assets/images/logo.png';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    return (
        <Stack direction="row" alignItems="flex-start" sx={{ width: '120px'}}>
            <img src={logo} alt="Helsinki City Bike" width="50%"/>
        </Stack>
    );
};

export default Logo;
