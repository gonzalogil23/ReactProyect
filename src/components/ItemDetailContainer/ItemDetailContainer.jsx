import React from "react";
import { useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { ItemContext } from "../../Context/ItemContext";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const { getItemDetail } = useContext(ItemContext);

  useEffect(() => {
    const getItemByID = async () => {
      if (itemId !== undefined) {
        getItemDetail(itemId);
      }
    };
    getItemByID();
  }, [itemId, getItemDetail]);

  return (
    <>
      <ItemDetail />
    </>
  );
}

export default ItemDetailContainer;
