import React, {useContext} from 'react';
import {CustomContext} from "../../Context";
import logo from '../../images/logo.png'
import './header.scss'
import NavList from "../../components/NavList/NavList";
import Button from "../../components/Button/Button";
import Info from "../../components/Info/Info";
import {Link} from "react-router-dom";
import closeImg from "../../images/closebtn.png";

const Header = () => {

    const {modal, handleModal} = useContext(CustomContext);

    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>

                <div className='header__left'>
                    <div className='header__logo'>
                        <Link to='/'>
                            <img src={logo} alt='logo' />
                        </Link>
                    </div>
                    <NavList/>
                </div>
                <div className='header__right'>
                    <Info/>
                    <Button text='Заказать звонок' handleModal={handleModal}/>
                </div>
                </div>
            </div>
            {
                modal && (
                    <form className='modal'>
                        <div className="modal__title">
                            Заказать звонок
                            <button type='text' onClick={() => handleModal(!modal)}>
                                <img src={closeImg} alt="close"/>
                            </button>
                        </div>
                        <p className='modal__text'>Оставьте заявку и мы свяжемся с Вами в ближайшее время!</p>
                        <input type="text" placeholder='Имя' className='modal__input'/>
                        <input type="tel" placeholder='Телефон' className='modal__input'/>
                        <Button text='Отправить' />
                    </form>
                )
            }
        </header>
    );
};

export default Header;