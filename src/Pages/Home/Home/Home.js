import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HomePageCars from '../HomePageCars/HomePageCars';
import LatestBlogs from '../LatestBlogs/LatestBlogs';
import Navbar from '../Navbar/Navbar';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <Welcome></Welcome>
            <HomePageCars></HomePageCars>
            <LatestBlogs></LatestBlogs>
            <Footer></Footer>
        </>
    );
};

export default Home;