import React, { Component } from 'react';

import close from './../../WindowBasket/BasketWindow/icon/close.png';
import './../../WindowBasket/BasketWindow/basketWindow.css';
import FavoriteCard from '../FavoriteCard';




export default class FavoriteWindow extends Component {



    render() {

        const { dataFavorite, removeAllCardsFromFavorite } = this.props;

        const cards = (
            dataFavorite.map(item => {


                return (
                    <FavoriteCard {...item} key={item.name} />
                )
            })
        )

        return (
            <div className='container'>
                <div className='window'>
                    <div className='window-header'>
                        <h3>Список бажань</h3>
                        <img src={close} alt="icon-close"
                            width={20} height={20}
                            style={{ cursor: 'pointer' }} />
                    </div>
                    <div>
                        <p
                            onClick={() => removeAllCardsFromFavorite()}
                            className='window-del-item'>Видaлити усі товари</p>
                    </div>

                    <div className='cardss'>

                        {cards}



                    </div>

                </div>
            </div>
        )
    }
}
