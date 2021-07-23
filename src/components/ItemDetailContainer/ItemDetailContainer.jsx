import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../../mock/mock";
import { useParams } from "react-router-dom";

// recibe como prop a item
function ItemDetailContainer({ item }) {
  const { product } = useParams();

  const [itemSelected, setItemSelected] = useState();

  useEffect(() => {
    const fetchItem = async () => {
      // getItem recibe itemSelected.id como parametro
      setItemSelected(await getItem(item.id));
    };
    fetchItem();
  });
  useEffect(() => {});
  return (
    <>
      <ItemDetail item={itemSelected} />
    </>
  );
}

export default ItemDetailContainer;
