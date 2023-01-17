import React, { Component } from 'react';

import './sort.css';

export default class Sort extends Component {
    render() {
        return (
            <div className='sort d-flex'>
                <div className='sort_header'>Sort:</div>
                <div className="sort_group">
                    <button className="sort_group-btn" >Radio 1</button>
                    <button className="sort_group-btn opacity-1" >Radio 1</button>
                    <button className="sort_group-btn" >Radio 1</button>

                </div>
            </div>
        )
    }
}
