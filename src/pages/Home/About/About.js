import React from 'react';
import './about.scss'
import img1 from '../../../images/about1.png'
import img2 from '../../../images/about2.png'
import img3 from '../../../images/about3.png'

const About = () => {
    return (
        <section className='about'>
            <div className="container">
                <h3 className="about__title">О нас</h3>
                <div className="about__inner">
                    <div className="about__left">
                        <p className='about__text'>
                            Сегодня «Домашняя гостиница» — одна
                            из крупнейших в Пермском крае гостиничных
                            сетей, динамично расширяющая географический
                            охват и повышающая качество сервиса.
                        </p>
                    </div>
                    <div className="about__right">
                        <div className="about__item">
                            <div className='about__item-img'>
                                <img src={img1} alt="img"/>
                            </div>
                            <div className="about__item-info">
                                <p className='about__item-count'>40+</p>
                                <p>Клиентов</p>
                            </div>
                        </div>
                        <div className="about__item">
                            <div className='about__item-img'>
                                <img src={img2} alt="img2"/>
                            </div>
                            <div className="about__item-info">
                                <p className='about__item-count'>100+</p>
                                <p>Отзывов</p>
                            </div>
                        </div>
                        <div className="about__item">
                            <div className='about__item-img'>
                                <img src={img2} alt="img2"/>
                            </div>
                            <div className="about__item-info">
                                <p className='about__item-count'>9</p>
                                <p>Квартир</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
