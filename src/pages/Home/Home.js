import React from 'react';
import Hero from "./Hero/Hero";
import Advantages from "./Advantages/Advantages";
import Flats from "./Flats/Flats";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Reviews from "./Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Advantages />
            <Flats/>
            <About/>
            <Contacts/>
            <Reviews/>
        </div>
    );
};

export default Home;