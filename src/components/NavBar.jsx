import react from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div>
          <Link to="/" className="navbar-brand">
            Terroir Wines
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                aria-current="page"
                activeClassName="activeLink"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink
                    to="/Categoria/Malbec"
                    className="dropdown-item"
                    activeClassName="activeLink"
                  >
                    Malbec
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Categoria/CavernetSauvignon"
                    className="dropdown-item"
                    activeClassName="activeLink"
                    a
                    className="dropdown-item"
                    href="#"
                  >
                    Carvernet Sauvignon
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Categoria/Blends"
                    className="dropdown-item"
                    activeClassName="activeLink"
                    a
                    className="dropdown-item"
                    href="#"
                  >
                    Blend
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Categoria/Blancos"
                    className="dropdown-item"
                    activeClassName="activeLink"
                    a
                    className="dropdown-item"
                    href="#"
                  >
                    Blancos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Categoria/Rosé"
                    className="dropdown-item"
                    activeClassName="activeLink"
                    a
                    className="dropdown-item"
                    href="#"
                  >
                    Rosé
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Categoria/packs"
                activeClassName="activeLink"
                className="nav-link"
              >
                Packs
              </NavLink>
            </li>
          </ul>
          <span className="navbar-text">
            <NavLink to="/Cart">
              <i className="fas fa-shopping-cart fa-2x"></i>
            </NavLink>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
