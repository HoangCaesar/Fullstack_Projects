import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import orderApi from '../api/orderApi';
import styled from 'styled-components';
import { mobile } from '../utils/responsive';
import { Link } from 'react-router-dom';

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
    width: 50%;
    padding: 20px;
    background-color: white;

    ${mobile({
        width: '75%',
    })}
`;

const Title = styled.h1`
    font-size: 24px;
    letter-spacing: 2px;
    line-height: 30px;
    font-weight: 300;
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
`;

const Success = () => {
    const location = useLocation();
    // console.log(location)
    const data = location.state.stripeData;
    const cart = location.state.products;
    // const currentUser = useSelector((state) => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await orderApi.createOrder({
                    userId: '123456',
                    products: cart.products.map((item) => ({
                        productId: item._id,
                        quantity: item._quantity,
                    })),
                    amount: cart.total,
                    address: data.billing_details.address,
                });
                setOrderId(res.id);
            } catch (err) {
                console.log(err);
            }
        };
        data && createOrder();
    }, [cart, data]);

    return (
        <Container>
            <Wrapper>
                {orderId ? (
                    <Title>
                        Order has been created successfully. Your order number is $
                        <span style={{ fontWeight: 'bold' }}>{orderId}</span>
                    </Title>
                ) : (
                    <Title>Successfull. Your order is being prepared...</Title>
                )}
                <Link to="/">
                    <Button>Go to Homepage</Button>
                </Link>
            </Wrapper>
        </Container>
    );
};

export default Success;
