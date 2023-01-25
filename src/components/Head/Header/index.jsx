import { Component } from "react";

import Basket from "../Basket";
import Favorites from "../Favorites";
import Find from "../Find";


class Header extends Component {
  render() {

    const { data, changeStatebasketOpened, changeStateFavoriteOpened } = this.props;

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <div className="navbar-brand">Wood.ua</div>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <Find />
            </div>

            <Favorites
              data={data}
              changeStateFavoriteOpened={changeStateFavoriteOpened}
            />
            <Basket changeStatebasketOpened={changeStatebasketOpened} />
          </div>
        </nav>

      </>
    );
  }
}

export default Header;