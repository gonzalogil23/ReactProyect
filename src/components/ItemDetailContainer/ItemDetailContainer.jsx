import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getItemDetail } from "../../mock/mock";
import ItemCount from "../ItemCount";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [itemSelected, setItemSelected] = useState();

  useEffect(() => {
    const getItemByID = async () => {
      if (itemId !== undefined) {
        const itemDetail = await getItemDetail(itemId);
        setItemSelected(itemDetail);
      }
    };
    getItemByID();
  }, [itemId]);

  return (
    <>
      <ItemDetail item={itemSelected} />
    </>
  );
}

export default ItemDetailContainer;
