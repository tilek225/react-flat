import React from 'react';
import logo from '../../images/logo.png'
import './footer.scss'
import {NavLink} from "react-router-dom";
import Info from "../../components/Info/Info";
import {FaVk, FaTelegram} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";
import {BsFacebook} from 'react-icons/bs'


const Footer = () => {
    const setActive = ({isActive}) => isActive ? 'footer__nav-active' : 'footer__item';
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__top">
                        <div className="footer__left">
                            <div className="footer__logo">
                                <img src={logo} alt="logo"/>
                            </div>
                            <nav className='footer__nav'>
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
                        </div>
                        <div className="footer__right">
                            <Info/>
                            <div className='footer__right-info'>
                                <FaTelegram  size={30}  color='white' />
                                <BsFacebook size={30} color='white'/>
                                <FaVk size={30} color='white'  />
                                <AiOutlineInstagram size={30}  color='white' />
                            </div>
                        </div>
                    </div>
                    <hr className='footer__hr'/>
                    <div className="footer__bottom">
                        <div className="footer__copyright">
                            © Copyright 2021, «Домашняя гостиница»
                        </div>
                        <div className="footer__contract">
                            Пользовательское соглашение
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;