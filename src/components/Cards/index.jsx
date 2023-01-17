import React, { Component } from 'react'
import Card from '../Card'


import './cards.css';

export default class Cards extends Component {
    render() {

        const { data, onTaggleFavorite } = this.props;

        const cards = data.map(item => {
            return (
                <Card key={item.name} {...item} onTaggleFavorite={() => onTaggleFavorite(item.name)} />
            )
        })

        return (
            <div className='cards'>
                {cards}

            </div>
        )
    }
}
