import React, {useContext} from 'react';
import {CustomContext} from "../../Context";
import logo from '../../images/logo.png'
import './header.scss'
import NavList from "../../components/NavList/NavList";
import Button from "../../components/Button/Button";
import Info from "../../components/Info/Info";
import MobileNavigation from "../../components/MobileNavigation/MobileNavigation";

const Header = () => {

    const {handleModal} = useContext(CustomContext);

    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>

                <div className='header__left'>
                    <div className='header__logo'>
                        <img src={logo} alt='logo' />
                    </div>
                    <NavList/>
                    {/*<MobileNavigation/>*/}
                </div>
                <div className='header__right'>
                    <Info/>
                    <Button text='Заказать звонок' handleModal={handleModal}/>
                </div>
                </div>
            </div>
        </header>
    );
};

export default Header;