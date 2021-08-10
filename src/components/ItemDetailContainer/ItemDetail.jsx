import React from "react";
import ItemCount from "../ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ShowButton from "../ShowButton";
import { ItemContext } from "../../Context/ItemContext";

function ItemDetail() {
  const { currentItem } = useContext(ItemContext);

  const { addToCart } = useContext(CartContext);
  const [productAdded, setProductAdded] = useState(false);

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
      {currentItem && (
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={currentItem.img}
                className="d-block mx-lg-auto img-fluid"
                alt=""
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold lh-1 mb-3">
                {currentItem.name}
              </h2>
              <p className="lead">{currentItem.desc}</p>
              <p className="">{currentItem.winery}</p>
              <p>{currentItem.type}</p>
              <p>
                <small>{currentItem.price}</small>
              </p>
              <>
                {!productAdded ? (
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <ItemCount
                      productAdded={productAdded}
                      addQty={addQty}
                      substractQty={substractQty}
                      qty={qty}
                    />
                    <button
                      type="click"
                      className="btn btn-primary"
                      onClick={() => {
                        addToCart(currentItem, qty);
                        setProductAdded(true);
                      }}
                    >
                      Agregar
                    </button>
                  </div>
                ) : (
                  <ShowButton />
                )}
              </>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetail;
