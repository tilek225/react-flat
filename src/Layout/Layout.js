import React from 'react';
import {Outlet } from 'react-router-dom'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import About from "../pages/Home/About/About";
import Contacts from "../pages/Home/Contacts/Contacts";
import Reviews from "../pages/Home/Reviews/Reviews";
import Write from "../pages/Home/Write/Write";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet />
            <About/>
            <Contacts/>
            <Reviews/>
            <Write/>
            <Footer/>
        </div>
    );
};

export default Layout;