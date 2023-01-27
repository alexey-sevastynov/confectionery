import React from "react";
import bug from './img/bug.png';

export default function NotFoundCards() {
    return (
        <div style={{ width: '100%', }} className='mt-5  d-flex flex-column align-items-center justify-content-center'>
            <img src={bug} alt="img"
                width={300} height={300} />

            <h2 className='mt-5' >Нічого немає у корзині</h2>
        </div>
    )
}