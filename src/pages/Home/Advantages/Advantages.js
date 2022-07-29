import React from 'react';
import img1 from '../../../images/group1.png'
import img2 from '../../../images/group2.png'
import img3 from '../../../images/group3.png'
import img4 from '../../../images/group4.png'
import './advantages.scss'

const Advantages = () => {
    return (
        <section className='advantages'>
            <div className='container'>
                <div className='advantages__inner'>
                    <div className='advantages__item'>
                        <div className='advantages__item-img'>
                            <img src={img1} alt='img1' />
                        </div>
                        <p className='advantages__item-text'>Заключаем договоры, предоставляет отчётные документы</p>
                    </div>
                    <div className='advantages__item'>
                        <div className='advantages__item-img'>
                            <img src={img2} alt='img2' />
                        </div>
                        <p className='advantages__item-text'>Наличный и
                            безналичный расчёт</p>
                    </div>
                    <div className='advantages__item'>
                        <div className='advantages__item-img'>
                            <img src={img3} alt='img3' />
                        </div>
                        <p className='advantages__item-text'>Бронирование и заселение круглосуточно</p>
                    </div>
                    <div className='advantages__item'>
                        <div className='advantages__item-img'>
                            <img src={img4} alt='img4' />
                        </div>
                        <p className='advantages__item-text'>Полная
                            конфиденциальность</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;
