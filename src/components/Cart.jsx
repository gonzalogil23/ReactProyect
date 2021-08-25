import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

function Cart({ finishPurchase }) {
  const { cartItems, deleteItem, createOrder, userInfo, setUserInfo } =
    useContext(CartContext);

  return (
    <>
      <div className="cart">
        <h3>Tus productos elegidos.</h3>
        {cartItems.length > 0 ? (
          cartItems.map((item, i) => {
            return (
              <>
                <div className="itemCart" key={i}>
                  <div>
                    <strong>{item.name}</strong> x {item.qty} =
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
              </>
            );
          })
        ) : (
          <Link to={"/"}>
            <button type="button" className="btn btn-outline-primary">
              Sigue comprando.
            </button>
          </Link>
        )}
        {cartItems.length > 0 && (
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => finishPurchase()}
          >
            Finalizar compra.
          </button>
        )}
      </div>
    </>
  );
}

export default Cart;
