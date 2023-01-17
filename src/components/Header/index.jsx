import Basket from "../Basket";
import Favorites from "../Favorites";
import Find from "../Find";


function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="navbar-brand">Wood.ua</div>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <Find />
          </div>

          <Favorites />
          <Basket />
        </div>
      </nav>

    </>
  );
}

export default Header;