import React from 'react';
import Hero from "./Hero/Hero";
import Advantages from "./Advantages/Advantages";
import Flats from "./Flats/Flats";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Reviews from "./Reviews/Reviews";
import Write from "./Write/Write";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Advantages />
            <Flats/>
        </div>
    );
};

export default Home;