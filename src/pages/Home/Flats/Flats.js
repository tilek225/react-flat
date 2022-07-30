import React from 'react';
import { Link } from 'react-router-dom'
import './flats.scss'
import { FiMapPin} from 'react-icons/fi'
import Button from "../../../components/Button/Button";

const Flats = () => {
    return (
        <section className='flats'>
            <div className="container">
                <div className="flats__inner">
                    <h2 className='flats__title'>Наши квартиры</h2>
                    <div className="flats__grid">
                        <div className="g2">
                            <div className="flats__info">
                                <p className='flats__info-title'>Трёхкомнатная квартира </p>
                                <p className='flats__info-price'>
                                    Сутки: <span>1 300 ₽</span>
                                </p>
                            </div>
                            <div className="flats__detailed">
                                <p className="flats__detailed-address">
                                    <FiMapPin color='red' />
                                    Березники, ул. Гагарина 89
                                </p>
                                <button type='button' className='flats__btn'>
                                    Подробнее
                                </button>
                            </div>
                        </div>
                        <div className="g4">
                            <div className="flats__info">
                                <p className='flats__info-title'>Пятикомнатная квартира </p>
                                <p className='flats__info-price'>
                                    Сутки: <span>4 100 ₽</span>
                                </p>
                            </div>
                            <div className="flats__detailed">
                                <p className="flats__detailed-address">
                                    <FiMapPin color='red' />
                                    Березники, ул. Шмидта 10
                                </p>
                                <button type='button' className='flats__btn'>
                                    Подробнее
                                </button>
                            </div>
                        </div>
                        <div className="g1">
                            <div className="flats__info">
                                <p className='flats__info-title'>Однокомнатная квартира</p>
                                <p className='flats__info-price'>
                                    Сутки: <span>1 500 ₽</span>
                                </p>
                            </div>
                            <div className="flats__detailed">
                                <p className="flats__detailed-address">
                                    <FiMapPin color='red' />
                                    Березники, ул. Юбилейная 108
                                </p>
                                <button type='button' className='flats__btn'>
                                    Подробнее
                                </button>
                            </div>
                        </div>
                        <div className="g3">
                            <div className="flats__info">
                                <p className='flats__info-title'>Двухкомнатная квартира </p>
                                <p className='flats__info-price'>
                                    Сутки: <span>1 700 ₽</span>
                                </p>
                            </div>
                            <div className="flats__detailed">
                                <p className="flats__detailed-address">
                                    <FiMapPin color='red' />
                                    Березники, ул. Власова 14
                                </p>
                                <button type='button' className='flats__btn'>
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <Link to='/catalog'>
                            <Button text='Смотреть все квартиры' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Flats;
