import React from 'react';
import img from '../../images/Background.png'
import Button from "../../components/Button/Button";
import { FiMapPin} from 'react-icons/fi'
import './product.scss'
import {Link} from "react-router-dom";

const Product = () => {
    return (
        <section className='product'>
            <div className="container">
                <h1 className="product__title">
                    1-к квартира, 31 м², 1/5 эт.
                </h1>
                <div className="product__inner">
                    <div className="product__top">
                        <div className="product__left">
                            <div className="product__img">
                                <img src={img} alt="img"/>
                            </div>
                        </div>

                        <div className="product__right">
                            <h2 className='product__subtitle'>Однокомнатная квартира</h2>
                            <p className="product__text">
                                Сдам 1- квартиру с балконом есть всё
                                необходимое для проживания выписываю
                                ДОКУМЕНТЫ ЧЕК ОНЛАЙН 25+звонить смс
                                не читаю
                            </p>
                            <p className="product__price">1 200 ₽ за сутки </p>
                            <p className="product__address">
                                <FiMapPin size={20} color='red'/>
                                <span>Березники, ул. Юбилейная 108</span>
                            </p>
                            <Button text='Забронировать'/>
                        </div>
                    </div>
                    <div className="product__middle">
                        <h3 className="product__middle-title">Оснащение:
                        </h3>
                        <div className="product__wrapper">
                            <ul className='product__list'>
                                <li className='product__list-item' >Холодильник</li>
                                <li className='product__list-item' >Стиральная машина</li>
                                <li className='product__list-item' >СВЧ</li>
                                <li className='product__list-item' >Телевизор плазма</li>
                                <li className='product__list-item' >Цифровое телевидение</li>
                            </ul>
                            <ul className='product__list'>
                                <li className='product__list-item' >Сушка</li>
                                <li className='product__list-item' >Балкон</li>
                                <li className='product__list-item' >Домофон</li>
                                <li className='product__list-item' >Wi-fi</li>
                                <li className='product__list-item' >Вся посуда</li>
                            </ul>
                            <ul className='product__list'>
                                <li className='product__list-item' >Два комплектка полотенца</li>
                                <li className='product__list-item' >Всегда качественное постельное белье</li>
                                <li className='product__list-item' >Большой, комфортный раздвижной дива</li>
                                <li className='product__list-item' >Спальное место 1600х2000</li>
                            </ul>
                        </div>
                    </div>
                    <div className="product__bottom">
                        <h4 className="product__bottom-title">Все сделано с любовью для Вас!</h4>
                        <Link to='/catalog'>
                            <Button text='Смотреть все квартиры' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;