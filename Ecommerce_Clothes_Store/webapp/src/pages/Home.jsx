import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Announcement, Categories, Footer, Navbar, Newsletter, ProductList, Slider } from '../components';

const Home = () => {
    const navigate = useNavigate();

    

    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <ProductList />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;
