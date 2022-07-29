import React from 'react';
import Hero from "./Hero/Hero";
import Advantages from "./Advantages/Advantages";
import Flats from "./Flats/Flats";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Advantages />
            <Flats/>
            <About/>
            <Contacts/>
        </div>
    );
};

export default Home;