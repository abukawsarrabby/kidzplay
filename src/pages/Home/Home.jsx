import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import About from './About';
import PageTitle from '../../components/PageTitle';
import CustomerReview from './CustomerReview';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home Page'></PageTitle>
            <Banner></Banner>
            <div className='max-w-6xl mx-auto'>
                <Gallery></Gallery>
                <ShopByCategory></ShopByCategory>
                <About></About>
                <CustomerReview></CustomerReview>
            </div>
        </div>
    );
};

export default Home;