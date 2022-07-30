import React, {useContext} from 'react';
import { NavLink} from "react-router-dom";
import {CustomContext} from "../../Context";
import './navlist.scss'

const setActive = ({isActive}) => isActive ? 'nav__active' : 'nav__item';

const NavList = () => {

    const {open, handleOpen} = useContext(CustomContext);

    return (
        <nav className='nav'>
            <NavLink to='/' className={setActive}>
                Главная
            </NavLink>
            <NavLink to='/catalog' className={setActive}>
                Квартиры
            </NavLink>
            <NavLink to='/contacts' className={setActive}>
                Контакты
            </NavLink>
            <NavLink to='/about' className={setActive}>
                О нас
            </NavLink>

        </nav>
    );
};

export default NavList;