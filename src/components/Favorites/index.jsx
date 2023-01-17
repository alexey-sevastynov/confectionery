import React, { Component } from 'react';
import favorites from './icon/favorites.png';

export default class Favorites extends Component {


  render() {

    const { data } = this.props;

    const count = data.filter(item => item.favorites === true).length;

    return (
      <button
        className="btn btn-secondary my-2 my-sm-0 mx-4"
        onClick={() => console.log(count)}
        type="submit">
        Favorites <sup>{count}</sup>

        <img
          src={favorites} alt="icon-favorites"
          className='mx-4'
          width={25} height={25} />

      </button>
    )
  }
}
