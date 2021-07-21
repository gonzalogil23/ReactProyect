import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { Item } from "./Item";

function ItemListContainer() {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    Item().then((res) => setWines(res));
  }, []);

  return (
    <div className="wineList ">
      <ItemList wines={wines} />
    </div>
  );
}

export default ItemListContainer;
