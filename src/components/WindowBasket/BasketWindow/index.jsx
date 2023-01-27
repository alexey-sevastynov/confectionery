import React, { Component } from 'react';
import BasketCard from '../BasketCard';
import NotFoundCards from './NotFoundCards';
import './basketWindow.css';

import close from './icon/close.png';

export default class BasketWindow extends Component {



    render() {

        const { dataBasket, removeCardFromBasket, removeAllCardsFromBasket } = this.props;

        const cards = dataBasket.length === 0 ? <NotFoundCards /> :
            (
                dataBasket.map(item => (
                    <BasketCard
                        key={item.name}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                        removeCardFromBasket={removeCardFromBasket} />
                ))
            );

        return (
            <div className='container'>
                <div className='window'>
                    <div className='window-header'>
                        <h3>Ваш кошик товарів</h3>
                        <img src={close} alt="icon-close"
                            width={20} height={20}
                            style={{ cursor: 'pointer' }} />
                    </div>

                    <div>
                        <p
                            onClick={() => removeAllCardsFromBasket()}
                            className='window-del-item'>Видaлити усі товари</p>
                    </div>


                    <div className='window-items'>

                        {cards}

                    </div>

                    <div className='window-btn'>
                        <button className='btn btn-secondary'>Продовжит покупку</button>
                        <button className='btn btn-primary'>Оформити покпку</button>
                    </div>


                </div>


            </div>
        )
    }
}
