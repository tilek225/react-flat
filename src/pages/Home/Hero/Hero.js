import React, {useContext} from 'react';
import {CustomContext} from "../../../Context";
import Button from "../../../components/Button/Button";
import './hero.scss'
import closeImg from '../../../images/closebtn.png'

const Hero = () => {
    const {modal, handleModal} = useContext(CustomContext)
    return (
        <section className='hero'>
            <div className='container'>
                <div className='hero__inner'>
                        <h1 className='hero__title'>Аренда квартир в Березниках</h1>
                        <p className='hero__subtitle'>На длительный срок
                            или посуточно</p>
                        <Button text='Смотреть варианты'/>
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
            </div>
        </section>
    );
};

export default Hero;