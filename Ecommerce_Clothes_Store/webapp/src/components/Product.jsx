import React from 'react';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    background-color: #f5fbfd;
`;

const Circle = styled.div`
    position: absolute;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: white;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    opacity: 0;
    cursor: pointer;
    transition: all 0.75s ease;

    &:hover {
        opacity: 1;
    }
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    transition: all 0.5s ease;

    &:hover {
        background-color: #e9f5f5;
        cursor: pointer;
        transform: scale(1.2);
    }
`;

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon />
                </Icon>
                <Icon>
                    <Link to={`/product-detail/${item._id}`}>
                        <SearchOutlinedIcon  style={{color: 'black'}}/>
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>
        </Container>
    );
};

export default Product;
