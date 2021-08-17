import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemContext } from "../../Context/ItemContext";

function ItemListContainer() {
  const { wines, getAllItems, getItemByCategory } = useContext(ItemContext);
  const { categoryId } = useParams();

  useEffect(() => {
    getAllItems();
  }, [getAllItems]);

  useEffect(() => {
    if (categoryId !== undefined) {
      getItemByCategory(categoryId);
    }
  }, [categoryId]);
  // useEffect(() => {
  //   const getAllItems = async () => {
  //     const getItem = await getMockedItems();
  //     setWines(getItem);
  //   };
  //   getAllItems();
  // }, []);

  // useEffect(() => {
  //   const getWinesByCategory = async () => {
  //     if (categoryId !== undefined) {
  //       const winesFiltered = await getItemByCategory(categoryId);
  //       setWines(winesFiltered);
  //     }
  //   };
  //   getWinesByCategory();
  // }, [categoryId]);

  return (
    <>
      <div className="wineList ">
        <ItemList wines={wines} />
      </div>
    </>
  );
}

export default ItemListContainer;
