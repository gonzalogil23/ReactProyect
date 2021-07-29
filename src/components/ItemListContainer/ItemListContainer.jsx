import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { getMockedItems } from "../../mock/mock";
import { getItemByCategory } from "../../mock/mock";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [wines, setWines] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const getAllItems = async () => {
      const getItem = await getMockedItems();
      setWines(getItem);
    };
    getAllItems();
  }, []);

  useEffect(() => {
    const getWinesByCategory = async () => {
      if (categoryId !== undefined) {
        const winesFiltered = await getItemByCategory(categoryId);
        setWines(winesFiltered);
      }
    };
    getWinesByCategory();
  }, [categoryId]);

  return (
    <>
      <div className="wineList ">
        <ItemList wines={wines} />
      </div>
    </>
  );
}

export default ItemListContainer;
