import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../../mock/mock";

// recibe como prop a item
function ItemDetailContainer({ item }) {
  const [itemSelected, setItemSelected] = useState();
  useEffect(() => {
    const fetchItem = async () => {
      // getItem recibe itemSelected.id como parametro
      setItemSelected(await getItem(item.id));
    };
    fetchItem();
  });
  return (
    <>
      <ItemDetail item={itemSelected} />
    </>
  );
}

export default ItemDetailContainer;
