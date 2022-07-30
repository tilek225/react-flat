import React from 'react';
import logo from '../../images/logo.png'
import './header.scss'
import NavList from "../../components/NavList/NavList";
import * as Md from 'react-icons/md'
import {AiOutlinePhone} from 'react-icons/ai'
import Button from "../../components/Button/Button";
import Info from "../../components/Info/Info";

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>

                <div className='header__left'>
                    <div className='header__logo'>
                        <img src={logo} alt='logo' />
                    </div>
                    <NavList/>
                </div>
                <div className='header__right'>
                    <Info/>
                    <Button text='Заказать звонок'/>
                </div>
                </div>
            </div>
        </header>
    );
};

export default Header;