import PropTypes from 'prop-types';

// material-ui
import { Box, Drawer, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import { drawerWidth } from '../../../config/config';
import MiniDrawerStyled from './MiniDrawerStyled';

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

interface DrawerProps {
    open: boolean;
    handleDrawerToggle: () => void;
    window?: () => void
}

const MainDrawer = ({ open, handleDrawerToggle, window }: DrawerProps) => {
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

    // responsive drawer container
    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1300 }} aria-label="mailbox folders">
            {!matchDownMD ? (
                <MiniDrawerStyled variant="permanent" open={open}>
                    <div>header</div>
                    <div>content</div>
                </MiniDrawerStyled>
            ) : (
                <Drawer
                    // container={container}
                    variant="temporary"
                    open={open}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            borderRight: `1px solid ${theme.palette.divider}`,
                            backgroundImage: 'none',
                            boxShadow: 'inherit'
                        }
                    }}
                >
                    {open && <div>header</div>}
                    {open && <div>content</div>}
                </Drawer>
            )}
        </Box>
    );
};

MainDrawer.propTypes = {
    open: PropTypes.bool,
    handleDrawerToggle: PropTypes.func,
    window: PropTypes.object
};

export default MainDrawer;
