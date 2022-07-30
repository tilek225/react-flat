import React from 'react';
import './button.scss'

const Button = ({text, handleModal}) => {


    return (
        <>
            <button type='button' className='button' onClick={handleModal}>{text}</button>
        </>
    );
};

export default Button;