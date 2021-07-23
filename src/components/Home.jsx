import React from "react";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

function Home() {
  return (
    <div>
      <ItemListContainer />
    </div>
  );
}

export default Home;
