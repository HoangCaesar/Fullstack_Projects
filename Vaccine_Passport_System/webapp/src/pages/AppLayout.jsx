import { Box, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Loading, SideBar, TopNav } from '../components';
import { isAuthenticated } from '../handlers';

const AppLayout = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkToken = (async () => {
            const res = await isAuthenticated();
            if (!res) return navigate('/login');
            setIsLoading(false);
        })();
    }, []);

    return isLoading ? (
        <Box sx={{ width: '100%', height: '100vh' }}>
            <Loading />
        </Box>
    ) : (
        <Box>
            <TopNav />
            <Box sx={{ display: 'flex' }}>
                <SideBar />
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        backgroundColor: '#eee',
                        width: 'max-content',
                    }}
                >
                    <Toolbar />
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default AppLayout;
