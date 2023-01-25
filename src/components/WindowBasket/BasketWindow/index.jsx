import React, { Component } from 'react';
import BasketCard from '../BasketCard';
import './basketWindow.css';

import close from './icon/close.png';

export default class BasketWindow extends Component {



    render() {

        const { name, dataBasket } = this.props;

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
                        <p className='window-del-item'>Виділити всі товари</p>
                    </div>


                    <div className='window-items'>

                        {
                            dataBasket.map(item => (
                                <BasketCard key={name} name={item.name} />
                            ))
                        }




                        {/* <div className='window-item'>
                            <img src={close} alt=""
                                width={100} height={100} />
                            <div className='window-item-name'>{name}</div>
                            <div className='count'>
                                <div className='count-border count-active'>-</div>
                                <div className='count-border'>1</div>
                                <div className='count-border count-active'>+</div>
                            </div>
                            <div className='window-item-price'> 4000,00 uah</div>
                            <img className='window-item-close' src={close} alt="icon-close"
                                width={15} height={15} />
                        </div> */}
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
