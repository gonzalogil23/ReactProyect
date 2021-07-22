import React from "react";
import CartForm from "../CartForm";
import { useState, useEffect, useRef } from "react";
import ItemList from "../ItemListContainer/ItemList";

function ItemDetail({ item }) {
  const [cart, setCart] = useState([]);

  const productAdded = useRef(true);

  const getProduct = (form, product) => {
    form.preventDefault();

    let itemAdded = {
      name: product.name,
      type: product.type,
      price: product.price,
      qty: form.target[1].value,
    };
    setCart([...cart, itemAdded]);
  };

  useEffect(() => {
    if (productAdded.current) {
      productAdded.current = false;
    } else {
      alert("¡Producto añadido al carrito!");
    }
  }, [cart]);

  return (
    <>
      {item && (
        <div className="modal" tabindex="-1" id="exampleModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{item.name}</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body row">
                <div className="col-md-4">
                  <img className="imgDetail" src={item.img} alt="" />
                </div>
                <div className="col-md-8">
                  <h5>{item.desc}</h5>
                  <p>{item.winery}</p>
                  <p>{item.type}</p>
                  <p>
                    <small>{item.price}</small>
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <CartForm addCart={getProduct} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetail;
