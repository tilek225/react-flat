import React from 'react';
import './button.scss'

const Button = ({text}) => {
    return (
        <>
            <button type='button' className='button'>{text}</button>
        </>
    );
};

export default Button;