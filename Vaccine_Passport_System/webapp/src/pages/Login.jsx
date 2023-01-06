import { LoadingButton } from '@mui/lab';
import { Box, Card, FormControl, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authApi from '../api/authApi';
import bgImage from '../assets/img/login-bg.png';
import { isAuthenticated } from '../handlers';

const Login = () => {
    const navigate = useNavigate();
    const [loginErr, setLoginErr] = useState();
    const [username, setUsername] = useState('');
    const [usernameErr, setUsernameErr] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState(false);
    const [onSubmit, setOnSubmit] = useState(false);

    useEffect(() => {
        const checkToken = (async () => {
            const res = await isAuthenticated();
            if (res) return navigate('/');
        })();
    }, []);

    const loginSubmit = async () => {
        if (onSubmit) return setLoginErr(undefined);

        const checkErr = {
            username: username.trim().length === 0,
            password: password.trim().length === 0,
        };

        setUsernameErr(checkErr.username);
        setPasswordErr(checkErr.password);

        if (checkErr.username || checkErr.password) return;

        const params = {
            username,
            password,
        };

        setOnSubmit(true);
        try {
            const res = await authApi.login(params);
            localStorage.setItem('token', res.token);
            setOnSubmit(false);
            navigate('/');
        } catch (err) {
            console.log(err.response);
            if(err.response.status === 401) {
              setLoginErr(err.response.data)
            }
            setOnSubmit(false);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                height: '100vh',
                background: `url(${bgImage}) right / cover no-repeat`,
            }}
        >
            <Card
                sx={{
                    width: '100%',
                    maxWidth: '600px',
                }}
            >
                <Box
                    sx={{
                        dispay: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        flexDirection: 'column',
                        margin: 'auto',
                        padding: '5rem 1rem',
                        height: '100%',
                        width: '100%',
                        maxWidth: '400px',
                        '& .MuiTextField-root': { mb: 5 },
                    }}
                >
                    <Typography variant="h5" textAlign="center" mb="4rem" fontWeight="700">
                        VACCINE PASSPORT
                    </Typography>
                    <FormControl fullWidth>
                        <TextField
                            placeholder='username: admin | password: @$aDmIn$@'
                            label="Username"
                            variant="outlined"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            error={usernameErr}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={passwordErr}
                        />
                    </FormControl>
                    {loginErr && (
                        <FormControl fullWidth>
                            <Typography textAlign="center" color="error">{loginErr}</Typography>
                        </FormControl>
                    )}
                    <LoadingButton
                        variant="contained"
                        fullWidth
                        size="large"
                        sx={{ marginTop: '1rem' }}
                        onClick={loginSubmit}
                    >
                        Sign In
                    </LoadingButton>
                </Box>
            </Card>
        </Box>
    );
};

export default Login;
