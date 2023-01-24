import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Chip } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import { LogoSection } from '../../../../components';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }: { open: boolean }) => {
    const theme = useTheme();
    return (
        // only available in paid version
        <DrawerHeaderStyled theme={theme} open={open}>
            <Stack direction="row" spacing={-8} alignItems="center">
                <LogoSection />
                <Chip
                    label={import.meta.env.VITE_COMPANY_NAME}
                    size="small"
                    sx={{ height: 18, '& .MuiChip-label': { fontSize: '0.625rem', py: 0.25 } }}
                    component="a"
                    href="https://www.hsl.fi/kaupunkipyorat"
                    target="_blank"
                    clickable
                />
            </Stack>
        </DrawerHeaderStyled>
    );
};

DrawerHeader.propTypes = {
    open: PropTypes.bool,
};

export default DrawerHeader;
