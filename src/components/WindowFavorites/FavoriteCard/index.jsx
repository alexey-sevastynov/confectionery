import React, { Component } from 'react'

export default class FavoriteCard extends Component {
    render() {


        const { name, rating, price, priceSale, } = this.props;

        const category = name.match(/[\p{Ll}\p{Lu}\p{Lt}\p{Lo}\p{Lm}\p{Mn}\p{Nd}\p{Pc}']+/u)[0];

        return (
            <div className="card mb-3">
                <h3 className="card-header">{category}</h3>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>

                </div>
                <ul className="list-group list-group-flush">
                    <li style={{ position: 'relative' }} className="list-group-item">Рейтинг
                        <span style={{ position: 'absolute', right: 100, color: 'red' }}>{rating}</span>
                    </li>
                    <li className="list-group-item">Акційна ціна
                        <span style={{ position: 'absolute', right: 100, color: 'red' }}>{priceSale}</span>
                    </li>
                    <li className="list-group-item">Ціна без акції
                        <span style={{ position: 'absolute', right: 100, color: 'red' }}>{price}</span>
                    </li>


                </ul>

                <div className="d-flex card-footer text-muted">
                    <button className='btn btn-primary'>Купити</button>
                    <button className='btn btn-danger'>Видалити з списку бажань</button>
                </div>
            </div>

        )
    }
}
