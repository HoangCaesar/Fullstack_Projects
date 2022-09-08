import { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../utils/responsive';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../handlers/authHandler';
import { userLogin } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url('https://img.freepik.com/free-photo/beautiful-black-woman-with-afro-curls-hairstylesmiling-hipster-model-white-tshirt-sexy-carefree-female-posing-street-near-blue-wall-sunglasses-cheerful-happy_158538-21467.jpg?w=2000')
            left / cover;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;

    ${mobile({
        width: '75%',
    })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin: 20px 10px 0px 0px;
    padding: 10px;
    flex: 1;
    min-width: 40%;
`;

const LinkDeco = styled.span`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
    margin-top: 15px;
    color: red;
`;

const Button = styled.button`
    margin: 20px 0;
    padding: 15px 20px;
    width: 40%;
    background-color: white;
    color: teal;
    border: 1px solid teal;
    transition: all 0.5s ease;
    &:hover {
        color: white;
        background-color: teal;
        cursor: pointer;
    }
    &:disabled {
        color: white;
        background-color: lightgray;
        cursor: not-allowed;
    }
`;

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { isFetching, error, currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        const checkToken = (async () => {
            const res = await isAuthenticated();
            if (res) return navigate('/');
        })();
    }, []);

    useEffect(() => {
        if (currentUser?.token) {
            localStorage.setItem('token', currentUser?.token);
            navigate('/');
        }
    }, [currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        userLogin(dispatch, { username, password });
    };

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input
                        value={username}
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        value={password}
                        type="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <Error>Something went wrong!</Error>}
                    {isFetching && <CircularProgress size="1rem" />}
                    <Button onClick={handleSubmit} disabled={isFetching}>
                        LOG IN
                    </Button>
                    <Link to="/register">
                        <LinkDeco>DO NOT YOU REMEMBER THE PASSWORD</LinkDeco>
                    </Link>
                    <Link to="/register">
                        <LinkDeco>CREATE NEW ACCOUNT</LinkDeco>
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;
