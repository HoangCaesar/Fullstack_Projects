import styled from 'styled-components';
import { Announcement, Footer, Navbar, Newsletter, ProductList } from '../components';
import { mobile } from '../utils/responsive';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;

    ${mobile({
        margin: '0 20px',
        display: 'flex',
        flexDirection: 'column',
    })}
`;

const FilterText = styled.span`
    margin-right: 20px;
    font-size: 20px;
    font-weight: 600;

    ${mobile({
        marginRight: '0',
    })}
`;

const FilterSelect = styled.select`
    margin-right: 20px;
    padding: 10px;

    ${mobile({
        margin: '10px 0',
    })}
`;

const FilterOption = styled.option``;

const ProductsPage = () => {
    const location = useLocation();
    const cat = location.pathname.split('/')[2];

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('newest');

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <FilterSelect name="color" onChange={handleFilters}>
                        <FilterOption disabled>Color</FilterOption>
                        <FilterOption>Yellow</FilterOption>
                        <FilterOption>White</FilterOption>
                        <FilterOption>Black</FilterOption>
                        <FilterOption>Red</FilterOption>
                        <FilterOption>Blue</FilterOption>
                        <FilterOption>Green</FilterOption>
                    </FilterSelect>
                    <FilterSelect name="size" onChange={handleFilters}>
                        <FilterOption disabled>Size</FilterOption>
                        <FilterOption>XS</FilterOption>
                        <FilterOption>S</FilterOption>
                        <FilterOption>M</FilterOption>
                        <FilterOption>L</FilterOption>
                        <FilterOption>XL</FilterOption>
                        <FilterOption>XXL</FilterOption>
                    </FilterSelect>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <FilterSelect onChange={(e) => setSort(e.target.value)}>
                        <FilterOption value="newest">Newest</FilterOption>
                        <FilterOption value="asc">Price (asc)</FilterOption>
                        <FilterOption value="desc">Price (desc)</FilterOption>
                    </FilterSelect>
                </Filter>
            </FilterContainer>
            <ProductList cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductsPage;
