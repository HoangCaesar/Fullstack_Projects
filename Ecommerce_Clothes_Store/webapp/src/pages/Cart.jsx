import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import paymentApi from '../api/paymentApi';
import { Announcement, Footer, Navbar } from '../components';
import { mobile } from '../utils/responsive';
import StripeCheckout from 'react-stripe-checkout';
import { isAuthenticated } from '../handlers/authHandler';
import { Link } from 'react-router-dom';

const KEY = import.meta.env.VITE_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;

    ${mobile({
        padding: '10px',
    })}
`;

const Title = styled.h1`
    text-align: center;
    font-weight: 300;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    color: ${(props) => (props.type === 'filled' ? 'white' : 'teal')};
    background-color: ${(props) => (props.type === 'filled' ? 'teal' : 'white')};
    border: 1px solid teal;
    transition: all 0.5s ease;
    &:hover {
        color: ${(props) => (props.type === 'filled' ? 'teal' : 'white')};
        background-color: ${(props) => (props.type === 'filled' ? 'white' : 'teal')};
        cursor: pointer;
    }
`;

const TopTexts = styled.div`
    ${mobile({
        display: 'none',
    })}
`;

const TopText = styled.span`
    margin: 0 10px;
    text-decoration: underline;
    cursor: pointer;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({
        flexDirection: 'column',
    })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({
        flexDirection: 'column',
    })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
`;

const ProductName = styled.h3`
    font-weight: 400;
`;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 0.8px solid #ddd;
    background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const PriceAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.span`
    margin: 5px;
    font-size: 24px;
    ${mobile({
        margin: '5px 15px',
    })}
`;

const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 200;
    ${mobile({
        marginBottom: '20px',
    })}
`;

const Hr = styled.hr`
    height: 1px;
    background-color: #eee;
    border: none;
`;

const Summary = styled.div`
    flex: 1;
    height: 80vh;
    padding: 20px;
    border: 0.5px solid lightgray;
    border-radius: 10px;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    font-size: ${(props) => props.type === 'total' && '28px'};
    font-weight: ${(props) => props.type === 'total' && '500'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    font-weight: 600;
    color: white;
    background-color: teal;
    border: 1px solid teal;
    transition: all 0.5s ease;
    &:hover {
        color: teal;
        cursor: pointer;
        background-color: white;
    }
`;

const Cart = () => {
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);
    const [stripeToken, setStripeToken] = useState(null);

    useEffect(() => {
        const checkToken = (async () => {
            const res = await isAuthenticated();
            if (!res) return navigate('/login');
        })();
    }, []);

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const paymentRequest = async () => {
            try {
                const res = await paymentApi.postToken({
                    token: stripeToken,
                    amount: cart.total * 100,
                    // amount: 500,
                });
                console.log(res);
                navigate('/success', {
                    state: {
                        stripeData: res,
                        products: cart,
                    },
                });
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && paymentRequest();
    }, [stripeToken, cart.total, navigate]);
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <Link to="/">
                        <TopButton>CONTINUE SHOPPING</TopButton>
                    </Link>
                    <TopTexts>
                        <TopText>Shopping Bag({cart.products.length})</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((item, index) => (
                            <Product key={index}>
                                <ProductDetail>
                                    <Image src={item.img} />
                                    <Details>
                                        <ProductName>
                                            <b>Product:</b> {item.title}
                                        </ProductName>
                                        <ProductId>
                                            <b>ID:</b> {item._id}
                                        </ProductId>
                                        <ProductColor color={item.color} />
                                        <ProductSize>
                                            <b>Size:</b> {item.size}
                                        </ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <PriceAmountContainer>
                                        <RemoveCircleOutlineOutlinedIcon />
                                        <ProductAmount>{item.quantity}</ProductAmount>
                                        <AddCircleOutlineOutlinedIcon />
                                    </PriceAmountContainer>
                                    <ProductPrice>$ {item.price * item.quantity}</ProductPrice>
                                </PriceDetail>
                            </Product>
                        ))}
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.80</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.80</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>

                        <StripeCheckout
                            name="Caesar Shop"
                            image="https://avatars.githubusercontent.com/u/1486366?v=4"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;
