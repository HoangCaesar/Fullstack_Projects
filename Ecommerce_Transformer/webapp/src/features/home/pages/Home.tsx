import React from 'react';
import './Home.scss';
import { Header, Footer } from '../../../components/layouts';
import { Ads, Intro, MainTrailer, MainDetail, MainSlider } from '../../../components/home_body';

const Home = () => {
    return (
        <div>
            <Header nav={true}/>
            <Ads />
            <Intro />
            <MainTrailer/>
            <MainDetail />
            <MainSlider />
            <Footer />
        </div>
    );
};

export default Home;
