import React, { Component } from 'react';
import Card from '../Card';
import bug from './img/bug.png';


import './cards.css';
import BasketWindow from '../../WindowBasket/BasketWindow';

export default class Cards extends Component {

    render() {

        const { data, onTaggleFavorite, numbersStarActive, basketOpened, dataBasket, addCardInBasket } = this.props;

        const cards = data.map(item => {
            return (

                <Card
                    key={item.name}
                    {...item}
                    addCardInBasket={addCardInBasket}
                    onTaggleFavorite={() => onTaggleFavorite(item.name)}
                    numbersStarActive={() => numbersStarActive(item.rating)} />
            )
        })

        const cardsBasket = dataBasket.length === 0 ? <NotFoundCards /> : <BasketWindow dataBasket={dataBasket} />;

        // const basket = (dataBasket.length === 0) ? <NotFoundCards /> : cardsBasket;

        return (
            <div className='cards'>
                {basketOpened ? cardsBasket : cards}



            </div>
        )
    }
}



export function NotFoundCards() {
    return (
        <div style={{ width: '100%' }} className='mt-5  d-flex flex-column align-items-center justify-content-center'>
            <img src={bug} alt="img"
                width={300} height={300} />

            <h2 className='mt-5' >Нічого немає у корзині</h2>
        </div>
    )
}

