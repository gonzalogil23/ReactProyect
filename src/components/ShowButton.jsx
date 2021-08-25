import React from "react";
import { Link } from "react-router-dom";

function ShowButton() {
  return (
    <>
      <Link to={"/CartContainer"}>
        <button type="button" class="btn btn-outline-success">
          Finalizar compra.
        </button>
      </Link>
    </>
  );
}

export default ShowButton;
