import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../utils/responsive';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    position: relative;

    margin: 3px;
    height: 80vh;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    ${mobile({
        height: '20vh',
    })}
`;

const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;

const Title = styled.h1`
    margin-bottom: 20px;
    color: #e0f2f1;
    text-shadow: 1px 1px 0 black;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    color: #212121;
    font-weight: 600;
    background-color: #e0f2f1;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        color: #e0f2f1;
        background-color: #212121;
        border-radius: 0;
    }
    transition: all 0.75s ease;
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/product-list/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOW NOW</Button>
                </Info>
            </Link>
        </Container>
    );
};

export default CategoryItem;
