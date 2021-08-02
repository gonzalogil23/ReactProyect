import React, { useContext } from "react";
import { CartContext } from "../Context";

function Cart() {
  const { cartItems, deleteItem } = useContext(CartContext);

  return (
    <div>
      <h1>Carrito</h1>
      {cartItems.length > 0 &&
        cartItems.map((item, i) => {
          return (
            <div className="d-flex justify-content-around" key={i}>
              <div>
                {item.name} x {item.qty} = {item.price * item.qty}
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
        })}
    </div>
  );
}

export default Cart;
