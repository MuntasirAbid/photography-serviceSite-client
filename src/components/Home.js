import React from 'react';
import useTitle from "../hooks/useTitle";
import About from './About';
import Banner from "./Banner";
import Banner2 from "./Banner2";
import Gallery from "./Gallery";
import ServiceChips from "./ServiceChips";

const Home = () => {

    useTitle('Home');

    return (
        <div>
            <About></About>
            <ServiceChips></ServiceChips>
            <Banner></Banner>
            <Gallery></Gallery>
            <Banner2></Banner2>
        </div>
    );
};

export default Home;