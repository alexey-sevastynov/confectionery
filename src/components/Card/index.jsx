import React, { Component } from 'react';
import heartFalse from './icon/heartFalse.png';
import heartTrue from './icon/heartTrue.png';
import starFalse from './icon/starFalse.png';
import starTrue from './icon/starTrue.png';
// import arrow from './icon/arrow.png';

import './card.css';

export default class Card extends Component {



    render() {

        const { name, img, raiting, price, priceSale, category, favorites, lenght, width, height, onTaggleFavorite } = this.props;

        const favorite = favorites ?
            (
                <img
                    className='heart'
                    onClick={onTaggleFavorite}
                    src={heartTrue} alt="icon-heart"
                    width={25} height={25} />
            ) :
            (
                <img
                    className='heart'
                    onClick={onTaggleFavorite}
                    src={heartFalse} alt="icon-heart"
                    width={25} height={25} />
            );



        return (


            <div className="card border-primary m-4" style={{ maxWidth: '20rem', position: 'relative' }}>

                {favorite}

                <div
                    style={{ backgroundColor: 'red', color: 'white', width: 80, textAlign: 'center', fontWeight: '600', position: 'absolute', top: 40, left: 40 }}>
                    <div>
                        - 10%
                    </div>
                </div>



                <img
                    style={{ margin: 40, height: '170px' }}
                    src={img} alt="img"


                />

                <div style={{ marginBottom: 20 }} className='d-flex align-self-center justify-content-center '>
                    {/* <img
                        className='mx-1'
                        src={starFalse} alt="icon-star"
                        width={25} height={25} /> */}
                    <img
                        className='mx-1'
                        src={starTrue} alt="icon-star"
                        width={25} height={25} />
                    {/* <img
                        className='mx-1'
                        src={starFalse} alt="icon-star"
                        width={25} height={25} /> */}
                    <img
                        className='mx-1'
                        src={starTrue} alt="icon-star"
                        width={25} height={25} />
                    {/* <img
                        className='mx-1'
                        src={starFalse} alt="icon-star"
                        width={25} height={25} /> */}
                    <img
                        className='mx-1'
                        src={starTrue} alt="icon-star"
                        width={25} height={25} />
                    {/* <img
                        className='mx-1'
                        src={starFalse} alt="icon-star"
                        width={25} height={25} /> */}
                    <img
                        className='mx-1'
                        src={starTrue} alt="icon-star"
                        width={25} height={25} />
                    <img
                        className='mx-1'
                        src={starFalse} alt="icon-star"
                        width={25} height={25} />
                    {/* <img
                        className='mx-1'
                        src={starTrue} alt="icon-star"
                        width={25} height={25} /> */}

                </div>

                <h5 className="card-header">{name}</h5>
                <div className="card-body">
                    {/* <p className="card-text">Ціна</p>
                    <h4 className="card-title">43.0 грн</h4> */}

                    <p >Акційна ціна</p>
                    {/* <div style={{ position: 'relative' }} className='d-flex'>
                        <div className='text-price'>200 грн</div>
                        <div className='d-flex arrow-block'>
                            <img
                                src={arrow} alt="icon-arrow"
                                height={80} width={100} />
                            <div>-20 грн</div>
                        </div>
                    </div> */}
                    <h4 style={{ color: 'red' }} className="card-title">180.0 грн</h4>



                    <p className="card-text">Довжина: 2000 мм</p>
                    <p className="card-text">Висота: 20 мм</p>
                    <p className="card-text">Ширина: 40 мм</p>


                </div>
                <button className="btn btn-lg btn-primary m-2" type="button">Купити</button>
            </div >
        )
    }
}
