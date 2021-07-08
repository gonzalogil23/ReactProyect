import react from "react";
import CartWidget from './pages/CartWidget'

const NavBar = () => {
  return (
    <div className="nav">
      <div className="title">
        <h1>Menú e-commerce</h1>
      </div>
      <div className="nav1">
        <ul className="list">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="">
            <li>About Us</li>
          </a>
          <a href="">
            <li>Products</li>
          </a>
        </ul>
      </div>
      <div>
        < CartWidget/>
      </div>
    </div>
  );
}

export default NavBar;

