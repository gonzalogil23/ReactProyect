import React, { createContext, useState } from "react";
import { getAllItems as getAll, getByCategory } from "../service/itemService";
import { getItemDetail as getDetail } from "../mock/mock";
export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [wines, setWines] = useState([]);
  const [currentItem, setCurrentItem] = useState({});

  const getAllItems = async () => {
    let winesFromDB = await getAll();
    console.log(winesFromDB);
    debugger;
    setWines(winesFromDB);
  };

  const getItemDetail = (id) => {
    let itemSelected = wines.find((item) => item.id.toString() === id);
    setCurrentItem(itemSelected);
    console.log(wines);
  };

  const getItemByCategory = async (category) => {
    let wineByCategory = await getByCategory(category);
    debugger;
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
