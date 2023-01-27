import React, { Component } from 'react';
import Card from '../Card';



import './cards.css';
// import BasketWindow from '../../WindowBasket/BasketWindow';

export default class Cards extends Component {

    render() {

        const { data, addCardInFavorite, numbersStarActive, basketOpened, dataBasket, addCardInBasket } = this.props;

        const cards = data.map(item => {
            return (

                <Card
                    key={item.name}
                    {...item}
                    addCardInBasket={addCardInBasket}
                    addCardInFavorite={() => addCardInFavorite(item.name)}
                    numbersStarActive={() => numbersStarActive(item.rating)} />
            )
        })

        // const cardsBasket = dataBasket.length === 0 ? <NotFoundCards /> : <BasketWindow dataBasket={dataBasket} />;

        // const basket = (dataBasket.length === 0) ? <NotFoundCards /> : cardsBasket;

        return (
            <div className='cards'>
                {/* {basketOpened ? cardsBasket : cards} */}

                {cards}

            </div>
        )
    }
}





