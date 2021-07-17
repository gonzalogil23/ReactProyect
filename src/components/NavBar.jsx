import react from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">Terroir Wines </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorías
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Malbec</a></li>
            <li><a className="dropdown-item" href="#">Carvernet Sauvignon</a></li>
            <li><a className="dropdown-item" href="#">Blend</a></li>
            <li><a className="dropdown-item" href="#">Blancos</a></li>
            <li><a className="dropdown-item" href="#">Rosé</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Catálogo</a>
        </li>
      </ul>
      <span className="navbar-text">
      <a href="">
          <i className="fas fa-shopping-cart fa-2x"></i>
        </a>
      </span>
    </div>
  </div>
</nav>
  );
}

export default NavBar;

