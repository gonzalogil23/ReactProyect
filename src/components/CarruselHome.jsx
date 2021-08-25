import React from "react";
import { Link } from "react-router-dom";

function CarruselHome() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active visually-hidden"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className="visually-hidden"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className="visually-hidden"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <img
            src="../../../imgBG/imagen1.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block text-start">
            <h1>Terroir Wines</h1>
            <p>Somos una vinoteca de alta gama</p>
            <Link to="/">
              <button className="btn btn-primary">Ver productos.</button>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../../../imgBG/imagen2.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Armá tu carrito</h1>
            <p>Agregá la cantidad de vinos que quieras</p>
            <Link to="/">
              <button className="btn btn-primary">Comprar.</button>
            </Link>
          </div>
        </div>
        <div className="carousel-item active">
          <img
            src="../../../imgBG/imagen3.jpg"
            className="d-block w-100"
            alt=""
          />
          <div className="carousel-caption d-none d-md-block text-end">
            <h1>Tenemos packs armados</h1>
            <p>De las mejores bodegas cuyanas</p>
            <Link to={"/Categoria/Pack"}>
              <button className="btn btn-primary">Ver Packs</button>
            </Link>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarruselHome;
