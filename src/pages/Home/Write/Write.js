import React from 'react';
import './write.scss'
import Button from "../../../components/Button/Button";


const Write = () => {
    return (
        <section className='write'>
            <div className="container">
                <div className="write__inner">
                    <form className="write__form">
                        <h6 className="write__title">Напишите нам</h6>
                        <input type="text" placeholder='Имя' className='write__input'/>
                        <input type="email" placeholder='Email' className='write__input'/>
                        <textarea className='write__textarea' placeholder='Ваше сообщение'></textarea>
                        <Button text='Отправить'/>
                    </form>
                    <div className="write__right">
                        <p className='write__comment'>
                            Дорогой гость, если у тебя есть какие-то
                            пожелания или притензии по улучшению
                            качества обслуживания или просто хочешь
                            оставить свой комментарий, то заполни форму
                            . Мы обязательно ответим тебе,
                            или опубликуем его на нашем сайте.
                        </p>
                        <p className='write__director'>
                           <span className='write__director-span'>Татьяна Вячеславовна</span>  <br/>
                            Директор гостиницы
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Write;
