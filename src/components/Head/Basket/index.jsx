import React, { Component } from 'react';
import basket from './icon/basket.png';


export default class Basket extends Component {



    render() {

        const { changeStatebasketOpened, dataBasket } = this.props;
        return (
            <button
                className="btn btn-secondary my-2 my-sm-0 mx-4" onClick={() => changeStatebasketOpened()}>
                Basket <sup> {dataBasket.length}</sup>

                <img
                    src={basket} alt="icon-basket"
                    className='mx-4'
                    width={25} height={25} />

            </button >


        )
    }
}



