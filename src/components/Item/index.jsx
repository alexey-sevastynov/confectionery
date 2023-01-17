import React, { Component } from 'react';
import './item.css';

import close from './icon/close.png';

export default class Item extends Component {



    render() {

        const { category } = this.props;






        return (
            <>
                <div style={{ cursor: 'pointer', position: 'relative' }} className='card my-4 '>
                    <div className='d-flex flex-row '>
                        <img
                            className='m-2 '
                            src="https://epicentrk.ua/upload/seofilter/a57/167885_1.jpeg"
                            alt="img-wood" />
                        <div style={{ width: '100%' }} className=' d-flex align-self-center justify-content-center'>{category}</div>
                    </div>
                    <img
                        style={{ position: 'absolute', right: 5, top: 5 }}
                        src={close} alt="icon-close"
                        width={20} height={20} />
                </div>
            </>


        )
    }
}
