import React, { createContext, useState } from "react";
import { getAllItems as getAll, getByCategory } from "../service/itemService";

export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [wines, setWines] = useState([]);
  const [currentItem, setCurrentItem] = useState({});

  const getAllItems = async () => {
    let winesFromDB = await getAll();
    setWines(winesFromDB);
  };

  const getItemDetail = (id) => {
    let itemSelected = wines.find((item) => item.id === id);
    console.log(wines, id);
    setCurrentItem(itemSelected);
  };
  const getItemByCategory = async (category) => {
    let wineByCategory = await getByCategory(category);
    setWines(wineByCategory);
  };

  return (
    <ItemContext.Provider
      value={{
        getAllItems,
        wines,
        currentItem,
        getItemDetail,
        getItemByCategory,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
export default ItemProvider;
