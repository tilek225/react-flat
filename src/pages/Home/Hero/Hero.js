import React, {useContext} from 'react';
import {CustomContext} from "../../../Context";
import Button from "../../../components/Button/Button";
import './hero.scss'
import closeImg from '../../../images/closebtn.png'
import {Link} from "react-router-dom";

const Hero = () => {
    const {modal, handleModal} = useContext(CustomContext)
    return (
        <section className='hero'>
            <div className='container'>
                <div className='hero__inner'>
                        <h1 className='hero__title'>Аренда квартир в Березниках</h1>
                        <p className='hero__subtitle'>На длительный срок
                            или посуточно</p>
                        <Link to='/catalog'>
                            <Button text='Смотреть варианты'/>
                        </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;