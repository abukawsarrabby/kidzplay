import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import About from './About';
import PageTitle from '../../components/PageTitle';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home Page'></PageTitle>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <About></About>
        </div>
    );
};

export default Home;