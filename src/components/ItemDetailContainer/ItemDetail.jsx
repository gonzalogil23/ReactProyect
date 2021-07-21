import React from "react";
import CartForm from "../CartForm";
import { useState, useEffect, useRef } from "react";
import { Item } from "../ItemListContainer/Item";
import ItemList from "../ItemListContainer/ItemList";

function ItemDetail(props) {
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
    <div className="ItemDetail">
      <div>
        <img src={props.img} alt="" />
      </div>
      <div>
        <div>
          <h2>{props.title}</h2>
          <h3>{props.winery}</h3>
          <p>{props.type}</p>
          <p>
            <small>{props.price}</small>
          </p>
        </div>
        <div>
          <CartForm addCart={getProduct} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
