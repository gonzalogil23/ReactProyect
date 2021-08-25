import React from "react";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
// import { useParams } from "react-router-dom";
import CarruselHome from "./CarruselHome";

function Home() {
  return (
    <>
      <div>
        <CarruselHome />
      </div>
      <div>
        <ItemListContainer />
      </div>
    </>
  );
}

export default Home;
