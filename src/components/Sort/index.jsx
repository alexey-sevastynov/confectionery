import React, { Component } from 'react';

import './sort.css';

export default class Sort extends Component {

    render() {

        const { sort, dataSortPanel } = this.props;

        const btnsSort = dataSortPanel.map(item => {

            const active = item.styleActive ? 'active' : null;

            return (
                <button
                    key={item.name}
                    className={`sort_group-btn ${active}`}
                    onClick={() => sort(item.name, item.styleActive)}
                >

                    {item.name}

                </button>
            )
        });


        return (
            <div className='sort d-flex' >
                <div className='sort_header'>Сортування:</div>
                <div className="sort_group">

                    {btnsSort}


                </div>
            </div>
        )
    }
}
