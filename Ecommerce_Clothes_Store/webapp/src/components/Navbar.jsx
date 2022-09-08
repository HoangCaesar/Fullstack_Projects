import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../handlers/authHandler';
import { mobile } from '../utils/responsive';

const Container = styled.div`
    height: 60px;
    ${mobile({
        height: '50px',
    })}
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    justify-content: space-between;
    ${mobile({
        padding: '10px 0',
    })}
`;

const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;

    ${mobile({
        display: 'none',
    })}
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border: 0.5px solid lightgray;
`;

const Input = styled.input`
    border: none;

    ${mobile({
        width: '50px',
    })}
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;

    ${mobile({
        fontSize: '24px',
    })}
`;

const Center = styled.div`
    flex: 1;
`;

const Right = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    ${mobile({
        justifyContent: 'center',
        flex: 2,
    })}
`;

const MenuItem = styled.div`
    margin-left: 25px;
    font-size: 14px;
    cursor: pointer;
    ${mobile({
        fontSize: '12px',
        marginLeft: '10px',
    })}
`;

const ModalContainer = styled.div`
    position: absolute;
    margin: 110px 51px 0 0;
    height: 80px;
    width: 150px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #888888;
    background-color: #f5f6f7;
    z-index: 9;
`;

const ModalWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    /* align-items: center; */
    flex-direction: column;
`;

const ModalItem = styled.button`
    display: flex;
    align-items: center;
    margin: 6px 20px 10px 12px;
    background-color: white;
    border: none;
    &:hover {
        color: white;
        background-color: teal;
        cursor: pointer;
    }
`;

const Text = styled.span`
    margin-left: 10px;
`;

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);

    const handleLogout = () => {
        logout(navigate);
    };

    const handleModal = () => {
        setOpenModal(!openModal);
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search..." />
                        <SearchOutlinedIcon style={{ color: 'gray', fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                        <Logo>CAESAR.</Logo>
                    </Link>
                </Center>
                <Right>
                    {/* <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem> */}
                    <MenuItem onClick={handleModal}>
                        <AccountCircleIcon color="action" />
                    </MenuItem>
                    {openModal && (
                        <ModalContainer>
                            <ModalWrapper>
                                <ModalItem>
                                    <FavoriteOutlinedIcon />
                                    <Text>Wishlist</Text>
                                </ModalItem>
                                <ModalItem onClick={handleLogout}>
                                    <LogoutOutlinedIcon />
                                    <Text>Logout</Text>
                                </ModalItem>
                            </ModalWrapper>
                        </ModalContainer>
                    )}
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlinedIcon color="action" />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
