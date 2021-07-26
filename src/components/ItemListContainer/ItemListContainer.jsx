import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { getItem } from "../../mock/mock";
import { getItemByCategory } from "../../mock/mock";
import { Item } from "./Item";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [wines, setWines] = useState([]);

  const { categoryId } = useParams();

  //TODO : llamar al mock que devuelve async

  useEffect(() => {
    Item().then((res) => setWines(res));
  }, []);

  useEffect(() => {
    const getWinesByCategory = async () => {
      if (categoryId != undefined) {
        const winesFiltered = await getItemByCategory(categoryId);
        setWines(winesFiltered);
      }
    };
    getWinesByCategory();
  }, [categoryId]);

  // useEffect(() => {
  //   if ({ id }) {
  //     getItemByCategory()
  //   }
  // });

  // useEffect(() => {
  //   const getCategory = async () => {
  //     setProductCategory(await getItem(item.category));
  //   };
  //   getCategory();
  // }, [categoria]);

  return (
    <>
      <div className="wineList ">
        {/* <h2>Categoria {id}</h2> */}
        <ItemList wines={wines} />
      </div>
    </>
  );
}

export default ItemListContainer;
