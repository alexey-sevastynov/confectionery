import React, { Component } from 'react'

export default class Find extends Component {

    render() {
        const { search, searchText } = this.props;

        return (
            <form>
                <input

                    value={searchText}
                    onChange={search}
                    style={{ width: '500px' }}
                    className="form-control me-sm-2"
                    type="search" placeholder="Search" />
            </form>
        )
    }
}
