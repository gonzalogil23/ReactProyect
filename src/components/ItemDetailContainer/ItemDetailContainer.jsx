import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../../mock/mock";
import { useParams } from "react-router-dom";
import { getItemDetail } from "../../mock/mock";

// recibe como prop a item
function ItemDetailContainer() {
  const { itemId } = useParams();

  const [itemSelected, setItemSelected] = useState();

  // useEffect(() => {
  //   const fetchItem = async () => {
  //     // getItem recibe itemSelected.id como parametro
  //     setItemSelected(await getItem(item.id));
  //   };
  //   fetchItem();
  // }, []);

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
