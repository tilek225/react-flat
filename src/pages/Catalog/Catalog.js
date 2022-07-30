import React from 'react';
import bg from '../../images/bg1.png'
import {Link} from 'react-router-dom'
import './catalog.scss'

const Catalog = () => {
    return (
        <section className='catalog'>
            <div className="container">
                <h1 className="catalog__title">Наши квартиры</h1>
                <div className="catalog__inner">
                    <div className="catalog__item">
                        <div className="catalog__img">
                            <Link to='/product'>
                                <img src={bg} alt="bg"/>
                            </Link>
                        </div>
                        <p className='catalog__item-title'>Однокомнатная квартира</p>
                        <p className='catalog__item-text'>Сдам 1ую квартиру ул. пл. с балконом
                            есть всё необходимое для проживания
                            Выписываем документы строгой...</p>
                        <p className='catalog__item-price'>1 000 ₽ за сутки</p>
                        <p className="catalog__item-address">Березники, ул. Юбилейная 108</p>
                        <Link to='/product'>
                            <button className="catalog__item-btn">Подробнее</button>
                        </Link>
                    </div>
                    <div className="catalog__item">
                        <div className="catalog__img">
                            <img src={bg} alt="bg"/>
                        </div>
                        <p className='catalog__item-title'>Однокомнатная квартира</p>
                        <p className='catalog__item-text'>Сдам 1ую квартиру ул. пл. с балконом
                            есть всё необходимое для проживания
                            Выписываем документы строгой...</p>
                        <p className='catalog__item-price'>1 000 ₽ за сутки</p>
                        <p className="catalog__item-address">Березники, ул. Юбилейная 108</p>
                        <button className="catalog__item-btn">Подробнее</button>
                    </div>
                    <div className="catalog__item">
                        <div className="catalog__img">
                            <img src={bg} alt="bg"/>
                        </div>
                        <p className='catalog__item-title'>Однокомнатная квартира</p>
                        <p className='catalog__item-text'>Сдам 1ую квартиру ул. пл. с балконом
                            есть всё необходимое для проживания
                            Выписываем документы строгой...</p>
                        <p className='catalog__item-price'>1 000 ₽ за сутки</p>
                        <p className="catalog__item-address">Березники, ул. Юбилейная 108</p>
                        <button className="catalog__item-btn">Подробнее</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;