import React from 'react';
import styled from 'styled-components';
import { mobile } from '../utils/responsive';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../handlers/authHandler';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url('https://img.freepik.com/free-photo/blissful-stylish-girl-laughing-blue-space-studio-shot-excited-pinup-female-model_197531-15138.jpg?w=2000')
            bottom/ cover;
`;

const Wrapper = styled.div`
    width: 40%;
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
    flex-wrap: wrap;
`;

const Input = styled.input`
    margin: 20px 10px 0px 0px;
    padding: 10px;
    flex: 1;
    min-width: 40%;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`;

const Button = styled.button`
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
`;

const Register = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkToken = (async () => {
            const res = await isAuthenticated();
            if (res) return navigate('/');
        })();
    }, []);
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="first name"></Input>
                    <Input placeholder="last name"></Input>
                    <Input placeholder="username"></Input>
                    <Input placeholder="email"></Input>
                    <Input placeholder="password"></Input>
                    <Input placeholder="confirm password"></Input>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in
                        accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;
