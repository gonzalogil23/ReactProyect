import React from "react";
import ItemCount from "../ItemCount";
import { useState } from "react";

function ItemDetail({ item }) {
  const [cart, setCart] = useState([]);
  const [productAdded, setProductAdded] = useState(false);

  const getProduct = (event) => {
    event.preventDefault();

    // let itemAdded = {
    //   name: item.name,
    //   type: item.type,
    //   price: item.price,
    //   qty: event.target[1].value,
    // };
    // setCart([...cart, itemAdded]);
    alert("¡Producto añadido al carrito!");
    setProductAdded(true);
  };

  const [qty, setQty] = useState(1);

  const addQty = () => {
    if (qty < 10) {
      setQty(qty + 1);
    } else {
      alert("Máximo de Stock alcanzado");
    }
  };
  const substractQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      alert("El mínimo es 1");
    }
  };

  return (
    <>
      {item && (
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={item.img}
                className="d-block mx-lg-auto img-fluid"
                alt=""
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold lh-1 mb-3">{item.name}</h2>
              <p className="lead">{item.desc}</p>
              <p className="">{item.winery}</p>
              <p>{item.type}</p>
              <p>
                <small>{item.price}</small>
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <ItemCount
                  addCart={getProduct}
                  productAdded={productAdded}
                  addQty={addQty}
                  substractQty={substractQty}
                  qty={qty}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetail;
