import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HomePageCars from '../HomePageCars/HomePageCars';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <HomePageCars></HomePageCars>
            <Footer></Footer>
        </>
    );
};

export default Home;