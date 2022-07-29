import React from 'react';
import Hero from "./Hero/Hero";
import Advantages from "./Advantages/Advantages";
import Flats from "./Flats/Flats";
import About from "./About/About";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Advantages />
            <Flats/>
            <About/>
        </div>
    );
};

export default Home;