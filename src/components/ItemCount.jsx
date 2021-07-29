import React from "react";
import ShowButton from "./ShowButton";

function ItemCount(props) {
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
              props.substractQty();
            }}
          >
            -
          </button>
          <input type="number" disabled value={props.qty} />
          <button
            type="button"
            className="rounded-end btn btn-outline-dark btn-sm"
            onClick={() => {
              props.addQty();
            }}
          >
            +
          </button>
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </form>
      ) : (
        <ShowButton />
      )}
    </>
  );
}

export default ItemCount;
