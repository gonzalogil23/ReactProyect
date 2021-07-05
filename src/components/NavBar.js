import react from "react";

export default function NavBar() {
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
        <a href="">
          <i className="fas fa-shopping-cart fa-2x"></i>
        </a>
      </div>
    </div>
  );
}
