import React, { Component } from 'react';

import close from './icon/close.png'

export default class BasketCard extends Component {
    render() {

        const { name, img, price, removeCardFromBasket } = this.props;

        return (

            <div className='window-item'>
                <img src={img} alt=""
                    width={100} height={100} />
                <div className='window-item-name'>{name}</div>
                <div className='count'>
                    <div className='count-border count-active'>-</div>
                    <div className='count-border'>1</div>
                    <div className='count-border count-active'>+</div>
                </div>
                <div className='window-item-price'> {price} грн</div>
                <img
                    className='window-item-close'
                    src={close} alt="icon-close"
                    width={15} height={15}
                    onClick={() => removeCardFromBasket(name)} />
            </div>

        )
    }
}
