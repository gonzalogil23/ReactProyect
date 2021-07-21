import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Item } from "../ItemListContainer/Item";

function ItemDetailContainer() {
  const [items, setItems] = useState([]);

  const getItems = async (res, reject) => {
    setTimeout(() => {
      res(ItemDetail);
    }, 2000).then((res) => {
      setItems(res);
    });
  };

  return (
    <>
      <ItemDetail />
    </>
  );
}

export default ItemDetailContainer;
