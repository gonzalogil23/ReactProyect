import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { getItem } from "../../mock/mock";
import { getItemByCategory } from "../../mock/mock";
import { Item } from "./Item";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [wines, setWines] = useState([]);

  const { id } = useParams();
  // const { id } = props.match.params;
  //TODO : llamar al mock que devuelve async
  useEffect(() => {
    Item().then((res) => setWines(res));
  }, []);

  useEffect(() => {
    if ({ id }) {
    }
  });

  // useEffect(() => {
  //   const getCategory = async () => {
  //     setProductCategory(await getItem(item.category));
  //   };
  //   getCategory();
  // }, [categoria]);

  return (
    <>
      <div className="wineList ">
        <ItemList wines={wines} />
      </div>
    </>
  );
}

export default ItemListContainer;
