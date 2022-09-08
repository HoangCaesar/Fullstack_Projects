import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../assets/data';
import Product from './Product';
import productApi from '../api/productApi';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
`;

const ProductList = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await productApi.getAll(cat ? `?category=${cat}` : '');
                setProducts(res);
            } catch (err) {
                console.log(err);
            }
        };
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) => item[key].includes(value))
                )
            );
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === 'newest') {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
        } else if (sort === 'asc') {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
        } else {
            setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
        }
    }, [sort]);

    return (
        <Container>
            {cat
                ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
                : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)}
        </Container>
    );
};

export default ProductList;
