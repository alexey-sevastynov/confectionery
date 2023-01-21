import React, { Component } from 'react';
import heartFalse from './icon/heartFalse.png';
import heartTrue from './icon/heartTrue.png';
import starFalse from './icon/starFalse.png';
import starTrue from './icon/starTrue.png';
import arrow from './icon/arrow.png';

import './card.css';



export default class Card extends Component {

    actStar = (num) => {
        let arr = [];
        for (let index = 0; index < num; index++) {
            arr = [...arr, index];

        }

        return arr;
    }

    notActStar = (num) => {
        const number = 5 - num;

        let arr = [];
        for (let index = 0; index < number; index++) {
            arr = [...arr, index];

        }

        return arr;
    }

    render() {



        const { name, img, rating, price, priceSale, category, favorites, lenght, width, height, onTaggleFavorite, numbersStarActive } = this.props;

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


        const activeStar = this.actStar(rating);
        const notActiveStar = this.notActStar(rating);

        const active = (
            activeStar.map(item => {
                return (
                    <ImageActiveStar key={item} />
                )
            })
        )

        const notActive = (
            notActiveStar.map(item => {
                return (
                    <ImageNotActiveStar key={item} />
                )
            })
        )

        const star = (
            <div style={{ marginBottom: 20 }} className='d-flex align-self-center justify-content-center' >
                {active}
                {notActive}
            </div >
        )

        const fotoCard = (
            <img
                style={{ margin: 40, height: '170px' }}
                src={img} alt="img"
            />
        )

        const procentDiscount = !priceSale ? null : (
            <div
                style={{ backgroundColor: 'red', color: 'white', width: 80, textAlign: 'center', fontWeight: '600', position: 'absolute', top: 40, left: 40 }}>
                <div>
                    - {priceSale}%
                </div>
            </div>
        )

        const priceBlock = !priceSale ? (
            <>
                <p className="card-text">Ціна</p>
                <h4 className="card-title">{price} грн</h4>
            </>
        ) :
            (

                <>
                    <p >Акційна ціна</p>
                    <div className='d-flex '>
                        <div className='text-price'>{price} грн</div>
                        <div className='red'>-{(price * (priceSale / 100)).toFixed(1)} грн</div>
                    </div>
                    <h4 style={{ color: 'red' }} className="card-title">{(price - (price * (priceSale / 100)).toFixed(1)).toFixed(1)} грн</h4>
                </>

            )






        return (


            <div className="card border-primary m-4" style={{ maxWidth: '20rem', position: 'relative' }}>

                {favorite}

                {procentDiscount}

                {fotoCard}

                {star}

                <h5 className="card-header">{name}</h5>

                <div className="card-body">
                    {priceBlock}



                    <p className="card-text">Довжина: 2000 мм</p>
                    <p className="card-text">Висота: 20 мм</p>
                    <p className="card-text">Ширина: 40 мм</p>


                </div>
                <button className="btn btn-lg btn-primary m-2" type="button">Купити</button>
            </div >
        )
    }
}







export function ImageActiveStar() {
    return (
        <img
            className='mx-1'
            src={starTrue} alt="icon-star"
            width={25} height={25} />
    )
}

export function ImageNotActiveStar() {
    return (
        <img
            className='mx-1'
            src={starFalse} alt="icon-star"
            width={25} height={25} />
    )
}