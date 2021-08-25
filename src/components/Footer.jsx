import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="footer container">
          <div>
            <ul>
              <Link to={"/Categoria/Malbec"}>
                <li>Malbec</li>
              </Link>
              <Link to={"/Categoria/CavernetSauvignon"}>
                <li>Cabernet Sauvignon</li>
              </Link>
              <Link to={"/Categoria/Blend"}>
                <li>Blend</li>
              </Link>
              <Link to={"/Categoria/Blanco"}>
                <li>Blancos</li>
              </Link>
              <Link to={"/Categoria/Rosé"}>
                <li>Rosé</li>
              </Link>
              <Link to={"/Categoria/Pack"}>
                <li>Packs</li>
              </Link>
            </ul>
          </div>
          <div>
            <p>Contactanos por nuestras redes.</p>
            <div className="redes">
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram fa-3x"></i>
              </a>
              <a href="https://web.whatsapp.com/">
                <i className="fab fa-whatsapp fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">Gonzalo Gil - 2021</div>
      </div>
    </>
  );
}

export default Footer;
