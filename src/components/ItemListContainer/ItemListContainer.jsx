import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { Item } from "./Item";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

function ItemListContainer() {
  const [wines, setWines] = useState([]);

  //TODO : llamar al mock que devuelve async
  useEffect(() => {
    Item().then((res) => setWines(res));
  }, []);

  return (
    <>
      <div className="wineList ">
        <ItemList wines={wines} />
      </div>
    </>
  );
}

export default ItemListContainer;
