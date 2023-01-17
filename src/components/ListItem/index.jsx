import React, { Component } from 'react';
import Item from '../Item';
import './listitem.css';

export default class ListItem extends Component {

    items = [
        { category: 'beam' },
        { category: 'board' },
        { category: 'rail' }
    ]


    render() {



        const item = this.items.map(item => {
            return (
                <Item key={item.category} category={item.category} />
            )
        })


        return (
            <div className='bg'>
                <h4 className='text-center'>Beams, boards and slats</h4>

                {item}

            </div>


        )
    }
}
