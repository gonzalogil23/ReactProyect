import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import PurchaseForm from "./PurchaseForm";
import Cart from "./Cart";

function CartContainer() {
  const [purchaseFinished, setPurchaseFinished] = useState(false);
  // const { cartItems, deleteItem, createOrder, userInfo, setUserInfo } =
  //   useContext(CartContext);

  const finishPurchase = () => {
    setPurchaseFinished(true);
  };

  return (
    <div className="cartContainer container">
      {!purchaseFinished ? (
        <Cart finishPurchase={finishPurchase} />
      ) : (
        <PurchaseForm />
      )}
    </div>
  );
}

export default CartContainer;
