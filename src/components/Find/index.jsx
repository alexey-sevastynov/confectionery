import React, { Component } from 'react'

export default class Find extends Component {
    render() {
        return (
            <form>
                <input style={{ width: '500px' }} className="form-control me-sm-2" type="search" placeholder="Search" />
            </form>
        )
    }
}
