import React from 'react';
import Button from "../../../components/Button/Button";
import './hero.scss'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='container'>
                <div className='hero__inner'>
                        <h1 className='hero__title'>Аренда квартир в Березниках</h1>
                        <p className='hero__subtitle'>На длительный срок
                            или посуточно</p>
                        <Button text='Смотреть варианты'/>
                </div>
            </div>
        </section>
    );
};

export default Hero;