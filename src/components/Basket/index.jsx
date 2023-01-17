import React, { Component } from 'react';
import basket from './icon/basket.png';


export default class Basket extends Component {
    render() {
        return (
            <button className="btn btn-secondary my-2 my-sm-0 mx-4" type="submit">
                Basket <sup>0</sup>

                <img
                    src={basket} alt="icon-basket"
                    className='mx-4'
                    width={25} height={25} />

            </button>
        )
    }
}
