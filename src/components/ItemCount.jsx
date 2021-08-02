import React from "react";
import ShowButton from "./ShowButton";

function ItemCount(props) {
  return (
    <>
      {!props.productAdded ? (
        <div>
          <button
            type="button"
            className="rounded-start btn btn-outline-dark btn-sm"
            onClick={() => {
              props.substractQty();
            }}
          >
            -
          </button>
          <h5>{props.qty}</h5>
          <button
            type="button"
            className="rounded-end btn btn-outline-dark btn-sm"
            onClick={() => {
              props.addQty();
            }}
          >
            +
          </button>
        </div>
      ) : (
        <ShowButton />
      )}
    </>
  );
}

export default ItemCount;
