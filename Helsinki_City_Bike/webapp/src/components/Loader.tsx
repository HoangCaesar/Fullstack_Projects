// material-ui
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

// loader style
const LoaderWrapper = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 2022,
    width: '100%',
    '& > * + *': {
        marginTop: theme.spacing(2),
    },
}));

// ==============================|| Loader ||============================== //

const Loader = () => {
    return (
        <LoaderWrapper>
            <LinearProgress color="primary" />
        </LoaderWrapper>
    );
};

export default Loader;
