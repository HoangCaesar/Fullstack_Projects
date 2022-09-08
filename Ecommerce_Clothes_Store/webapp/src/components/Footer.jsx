import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../utils/responsive';

const Container = styled.div`
    display: flex;

    ${mobile({
        flexDirection: 'column',
    })}
`;

const Left = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
    margin: 20px 0px;
    letter-spacing: 2px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;

    ${mobile({
        display: 'none',
    })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;

    ${mobile({
        backgroundColor: '#fff8f8',
    })}
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>CAESAR.</Logo>
                <Description>
                    There are many variations of passenges of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour, or
                    randomised word which don't look even slightly believable.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <YouTubeIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <PlaceOutlinedIcon style={{ marginRight: '10px' }} />
                    600 Nguyen Luong Bang, district 7, Ho Chi Minh City
                </ContactItem>
                <ContactItem>
                    <LocalPhoneOutlinedIcon style={{ marginRight: '10px' }} />
                    +358 999999999
                </ContactItem>
                <ContactItem>
                    <EmailOutlinedIcon style={{ marginRight: '10px' }} />
                    contact@caesar.dev
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;
