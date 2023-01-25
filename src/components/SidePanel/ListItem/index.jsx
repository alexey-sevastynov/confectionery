import React, { Component } from 'react';
import Item from '../Item';
import './listitem.css';

export default class ListItem extends Component {

    showTextHeader(array) {
        const arr = array.filter(item => item.active === false); // check for emptiness array

        return arr.length === 0 ?
            'Бруси, дошки та рейки' :
            array.filter(item => item.active === true)
                .map(item => item.name)
                .toString();
    }

    render() {

        const { onTaggleActiveSort, dataSidePanel , dataSortPanel } = this.props;

        const item = dataSidePanel.map(item => {
            return (
                <Item
                    key={item.category}
                    img={item.img}
                    name={item.name}
                    category={item.category}
                    active={item.active}
                    onTaggleActiveSort={onTaggleActiveSort}
                    dataSortPanel={dataSortPanel}

                />
            )
        })

        return (
            <div className='bg'>
                <h4 className='text-center'>{this.showTextHeader(dataSidePanel)}</h4>

                {item}

            </div>


        )
    }
}
