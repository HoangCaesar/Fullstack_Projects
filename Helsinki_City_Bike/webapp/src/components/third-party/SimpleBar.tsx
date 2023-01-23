import PropTypes from 'prop-types';

// material-ui
import { Box } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

// third-party
import { BrowserView, MobileView } from 'react-device-detect';
import SimpleBar from 'simplebar-react';

// root style
const RootStyle = styled(BrowserView)({
    flexGrow: 1,
    height: '100%',
    overflow: 'hidden',
});

// scroll bar wrapper
const SimpleBarStyle = styled(SimpleBar)(({ theme }) => ({
    maxHeight: '100%',
    '& .simplebar-scrollbar': {
        '&:before': {
            backgroundColor: alpha(theme.palette.grey[500], 0.48),
        },
        '&.simplebar-visible:before': {
            opacity: 1,
        },
    },
    '& .simplebar-track.simplebar-vertical': {
        width: 10,
    },
    '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
        height: 6,
    },
    '& .simplebar-mask': {
        zIndex: 'inherit',
    },
}));

// ==============================|| SIMPLE SCROLL BAR  ||============================== //

interface SimpleBarScrollProps {
    children: JSX.Element;
    sx: {
        '& .simplebar-content': {
            display: string;
            flexDirection: string;
        };
    };
}

export default function SimpleBarScroll({ children, sx, ...other }: SimpleBarScrollProps) {
    return (
        <>
            <RootStyle>
                <SimpleBarStyle clickOnTrack={false} sx={sx} {...other}>
                    {children}
                </SimpleBarStyle>
            </RootStyle>
            <MobileView>
                <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
                    {children}
                </Box>
            </MobileView>
        </>
    );
}

SimpleBarScroll.propTypes = {
    children: PropTypes.node,
    sx: PropTypes.object,
};
