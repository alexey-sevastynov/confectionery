import React, { Component } from 'react';

import close from './icon/close.png'

export default class BasketCard extends Component {
    render() {

        const { name } = this.props;

        return (

            <div className='window-item'>
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
            </div>

        )
    }
}
