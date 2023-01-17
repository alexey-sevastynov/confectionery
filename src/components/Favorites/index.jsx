import React, { Component } from 'react';
import favorites from './icon/favorites.png';

export default class Favorites extends Component {
  render() {
    return (
      <button className="btn btn-secondary my-2 my-sm-0 mx-4" type="submit">
        Favorites <sup>0</sup>

        <img
          src={favorites} alt="icon-favorites"
          className='mx-4'
          width={25} height={25} />

      </button>
    )
  }
}
