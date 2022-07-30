import React from 'react';
import img from '../../images/Background.png'
import './product.scss'

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

                        <div className="product__right"></div>
                    </div>
                    <div className="product__middle">

                    </div>
                    <div className="product__bottom">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;