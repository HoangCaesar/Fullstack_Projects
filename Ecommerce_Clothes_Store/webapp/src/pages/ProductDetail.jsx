import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import productApi from '../api/productApi';
import { Announcement, Footer, Navbar, Newsletter } from '../components';
import { addProduct } from '../redux/cartRedux';
import { mobile } from '../utils/responsive';

const Container = styled.div``;

const Wrapper = styled.div`
    display: flex;
    padding: 50px;

    ${mobile({
        flexDirection: 'column',
        padding: '10px',
    })}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;

    ${mobile({
        height: '40vh',
    })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;

    ${mobile({
        padding: '10px',
    })}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Description = styled.p`
    margin: 20px 0px;
    letter-spacing: 2px;
    line-height: 22px;
`;

const Price = styled.p`
    font-size: 40px;
    font-weight: 100;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    width: 50%;

    ${mobile({
        width: '100%',
    })}
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    margin-right: 10px;
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    margin: 0px 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 0.8px solid #ddd;
    background-color: ${(props) => props.color};
    cursor: pointer;
`;

const FilterSize = styled.select`
    padding: 5px;
    cursor: pointer;
`;

const FilterSizeOption = styled.option`
    padding: 5px;
`;

const AddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    ${mobile({
        width: '100%',
    })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
`;

const Button = styled.button`
    padding: 15px;
    font-weight: 500;
    background-color: white;
    border: 2px solid teal;
    transition: all 0.5s ease;
    &:hover {
        color: white;
        background-color: teal;
        cursor: pointer;
    }
`;

const ProductDetail = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const dispatch = useDispatch();

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState();
    const [size, setSize] = useState();

    useEffect(() => {
        const getProduct = (async () => {
            try {
                const res = await productApi.getOne(id);
                setProduct(res);
                setColor(res.color[0]);
                setSize(res.size[0]);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleQuantity = (type) => {
        if (type === 'dec') setQuantity((prev) => (prev === 1 ? (prev = 1) : prev - 1));
        else setQuantity((prev) => prev + 1);
    };

    const handleColor = (item) => {
        setColor(item);
    };

    const handleCart = () => {
        dispatch(addProduct({ ...product, quantity, color, size }));
    };

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>

                    <Description>{product.desc}</Description>

                    <Price>$ {product.price}</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color &&
                                product.color.map((item) => (
                                    <FilterColor
                                        color={item}
                                        key={item}
                                        onClick={() => handleColor(item)}
                                    />
                                ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product.size &&
                                    product.size.map((item) => (
                                        <FilterSizeOption key={item}>{item}</FilterSizeOption>
                                    ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <RemoveCircleOutlineOutlinedIcon
                                cursor="pointer"
                                onClick={() => handleQuantity('dec')}
                            />
                            <Amount>{quantity}</Amount>
                            <AddCircleOutlineOutlinedIcon
                                cursor="pointer"
                                onClick={() => handleQuantity('inc')}
                            />
                        </AmountContainer>

                        {/* <Link to="/cart"> */}
                        <Button onClick={handleCart}>ADD TO CART</Button>
                        {/* </Link> */}
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductDetail;
