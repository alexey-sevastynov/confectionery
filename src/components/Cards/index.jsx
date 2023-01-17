import React, { Component } from 'react'
import Card from '../Card'


import './cards.css';

export default class Cards extends Component {
    render() {

        const { data } = this.props;

        const cards = data.map(item => {
            return (
                <Card {...item} />
            )
        })

        return (
            <div className='cards'>
                {cards}

            </div>
        )
    }
}
