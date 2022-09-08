import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { categories } from '../assets/data';
import { mobile } from '../utils/responsive';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    ${mobile({
        padding: '0',
        flexDirection: 'column',
    })}
`;

const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem key={item.id} item={item} />
            ))}
        </Container>
    );
};

export default Categories;
