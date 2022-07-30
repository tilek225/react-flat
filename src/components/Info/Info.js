import React from 'react';
import './info.scss'
import * as Md from "react-icons/md";
import {AiOutlinePhone} from "react-icons/ai";

const Info = () => {
    return (
        <>
            <div className='email'>
                <Md.MdOutlineEmail  size={20}  />
                <p className='header__email-text'>mail@yandex.ru</p>
            </div>
            <div className='tel'>
                <AiOutlinePhone size={20} />
                <p className='tel__text'>+7 (919) 714-25-00</p>
            </div>
        </>
    );
};

export default Info;
