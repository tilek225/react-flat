import React from 'react';
import './reviews.scss'
import stars from '../../../images/stars.png'

const Reviews = () => {
    return (
        <section className='reviews'>
            <div className="container">
                <h5 className='reviews__title'>Отзывы клиентов</h5>
                <div className="reviews__inner">
                    <div className="reviews__item">
                        <div className="reviews__top">
                            <p className='reviews__top-title'>Уютная квартира</p>
                            <img src={stars} alt="rating"/>
                        </div>
                        <div className="reviews__middle">
                            Первый раз отдыхали в Березниках,
                            времени было мало соответственно жильё
                            искали заранее. Залог вносили с опасением,
                            и очень рады что они были напрасными.
                            Всё супер. Нам понравилось!
                        </div>
                        <div className="reviews__bottom">
                            <div className="reviews__bottom-user">
                                <p className='reviews__bottom-span'>Екатерина Трушникова</p>
                                <p>г. Пермь</p>
                            </div>
                            <div className="reviews__bottom-date">2 января 2021</div>
                        </div>
                    </div>
                    <div className="reviews__item">
                        <div className="reviews__top">
                            <p className='reviews__top-title'>Клёвый вид на город</p>
                            <img src={stars} alt="rating"/>
                        </div>
                        <div className="reviews__middle">
                            Хочу поблагодарить за квартиру на ул.
                             Юбилейной, д. 108. Удобное месторасположение,
                            совсем рядом с центром. Квартира уютная,
                            соседей не слышно, мы прекрасно
                            отдохнули. Все что нужно для приготовления
                            еды есть.
                        </div>
                        <div className="reviews__bottom">
                            <div className="reviews__bottom-user">
                                <p className='reviews__bottom-span'>Иван Огородников</p>
                                <p>г. Краснокамск</p>
                            </div>
                            <div className="reviews__bottom-date">15 сентября 2019</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
