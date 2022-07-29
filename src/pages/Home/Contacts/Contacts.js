import React from 'react';
import './contacts.scss'
import { FiMapPin} from 'react-icons/fi'
import * as Md from 'react-icons/md'
import {AiOutlinePhone, AiOutlineInstagram} from 'react-icons/ai'
import {FaVk} from 'react-icons/fa'
import map from '../../../images/Map.png'

const Contacts = () => {
    return (
        <section className='contacts'>
            <div className="container">
                <h4 className="contacts__title">Контакты</h4>
                <div className="contacts__inner">
                    <div className="contacts__left">
                        <div className="contacts__info">
                            <div className="contacts__item">
                                <FiMapPin size={30} color='blue' />
                                Пермский край, город Березники
                            </div>
                            <div className="contacts__item">
                                <Md.MdOutlineEmail  size={30} color='blue'  />
                                mail@yandex.ru
                            </div>
                            <div className="contacts__item">
                                <AiOutlinePhone size={30} color='blue' />
                                +7 (919) 714-25-00
                            </div>
                        </div>
                        <div className="contacts__media">
                            <div className="contacts__el">
                                <AiOutlineInstagram size={30} color='blue' />
                                arendakvartir59
                                <button className='contacts__btn'>Подписаться</button>
                            </div>
                            <div className="contacts__el">
                                <FaVk size={30} color='blue' />
                                arendakvartir59
                                <button className='contacts__btn'>Подписаться</button>
                            </div>
                        </div>
                    </div>
                    <div className="contacts__right">
                        <img src={map} alt="map"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
