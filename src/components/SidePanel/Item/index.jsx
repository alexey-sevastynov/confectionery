import React, { Component } from 'react';
import './item.css';

import close from './icon/close.png';

export default class Item extends Component {

    render() {

        const { category, active, onTaggleActiveSort, img, name, dataSortPanel } = this.props;

        const nameSort = dataSortPanel.filter(item => item.styleActive === true).map(item => item.name).toString();

        const onActive = active ? (
            <img
                className="close"
                src={close} alt="icon-close"
                width={20} height={20} />
        ) : null;

        const cardActive = active ? 'card-active' : null;
        const clazz = `card my-4 ${cardActive}`;

        return (
            <>
                <div style={{ cursor: 'pointer', position: 'relative' }} className={clazz}>
                    <div
                        className='d-flex flex-row '
                        onClick={() => onTaggleActiveSort(category, nameSort)}>

                        <img
                            className='m-2 '
                            src={img}
                            width={80}
                            alt="img-wood" />

                        <div
                            style={{ width: '100%' }}
                            className=' d-flex align-self-center justify-content-center'
                        >
                            {name}
                        </div>
                    </div>


                    {onActive}
                </div>
            </>
        )
    }
}
