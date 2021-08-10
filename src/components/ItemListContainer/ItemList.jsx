import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function ItemList({ wines = [] }) {
  return (
    <>
      {wines.length === 0 ? (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        wines.map((wine, i) => (
          <>
            <div className="col" key={i}>
              <div className="card rounded mb-3">
                <div className="row g-0">
                  <div className=" col-md-4">
                    <img
                      src={wine.img}
                      className="img-fluid rounded-start"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{wine.name}</h5>
                      <h6 className="card-subtitle">{wine.winery}</h6>
                      <p class="card-text">{wine.type}</p>
                      <p class="card-text">
                        <Link to={`/item/${wine.id}`}>
                          <small class="text-muted">Ver detalle</small>{" "}
                        </Link>
                      </p>
                      <p class="card-text">
                        <small class="text-muted">$ {wine.price}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))
      )}
    </>
  );
}

export default ItemList;
