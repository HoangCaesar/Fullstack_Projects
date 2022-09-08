import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import { mobile } from '../utils/responsive';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 60vh;
    background-color: #fcf5f5;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({
        textAlign: 'center',
    })}
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    height: 40px;
    background-color: white;
    border: 1px solid lightgray;
    ${mobile({
        width: '80%',
    })}
`;

const Input = styled.input`
    flex: 8;
    padding-left: 20px;
    border: none;
    outline: lightgray;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    cursor: pointer;
    color: white;
    background-color: teal;
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from you favourite products.</Description>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;
