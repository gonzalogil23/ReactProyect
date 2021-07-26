import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemCount(props) {
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
      {!props.productAdded ? (
        <form
          action=""
          onSubmit={(data) => {
            props.addCart(data, props);
          }}
        >
          <button
            type="button"
            className="rounded-start btn btn-outline-dark btn-sm"
            onClick={() => {
              substractQty();
            }}
          >
            -
          </button>
          <input type="number" disabled value={qty} />
          <button
            type="button"
            className="rounded-end btn btn-outline-dark btn-sm"
            onClick={() => {
              addQty();
            }}
          >
            +
          </button>
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </form>
      ) : (
        <Link to={"/Cart"}>
          <button type="button" class="btn btn-outline-success">
            Finalizar compra.
          </button>
        </Link>
      )}
    </>
  );
}

export default ItemCount;
