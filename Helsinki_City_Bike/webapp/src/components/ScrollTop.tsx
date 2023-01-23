import { ReactElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// ==============================|| NAVIGATION - SCROLL TO TOP ||============================== //

const ScrollTop = ({ children }: { children: ReactElement }) => {
    const location = useLocation();
    const { pathname } = location;
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [pathname]);

    return children || null;
};

ScrollTop.propTypes = {
    children: PropTypes.node,
};

export default ScrollTop;
