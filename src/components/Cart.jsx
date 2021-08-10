import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, deleteItem } = useContext(CartContext);

  return (
    <div>
      <h1>Carrito</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item, i) => {
          return (
            <div className="d-flex justify-content-around" key={i}>
              <div>
                <strong>{item.name}</strong> x {item.qty} ={" "}
                {item.price * item.qty}
              </div>
              <div>
                <i
                  class="far fa-trash-alt fa-2x"
                  onClick={() => {
                    deleteItem(item);
                  }}
                ></i>
              </div>
            </div>
          );
        })
      ) : (
        <Link to={"/"}>
          <button type="button" className="btn btn-outline-primary">
            Sigue comprando.
          </button>
        </Link>
      )}
    </div>
  );
}

export default Cart;
