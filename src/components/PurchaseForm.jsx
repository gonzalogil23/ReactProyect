import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

function PurchaseForm() {
  const { order, createNewOrder } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const isButtonDisabled = () => {
    return (
      name === "" ||
      email === "" ||
      phone === "" ||
      address === "" ||
      city === ""
    );
  };

  return (
    <>
      <div className="purchaseForm">
        <div className="input">
          <label htmlFor="nombre">Nombre Completo</label>
          <input
            type="text"
            id="nombre"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name=""
            id="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="phone">Teléfono</label>
          <input
            type="tel"
            name=""
            id="phone"
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="adress">Dirección</label>
          <input
            type="text"
            id="address"
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="city">Ciudad</label>
          <input
            type="text"
            name=""
            id="city"
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <button
          className="btn btn-primary button"
          onClick={(event) => {
            event.preventDefault();
            createNewOrder({ name, email, phone, address, city });
          }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          disabled={isButtonDisabled()}
        >
          Finalizar compra.
        </button>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ¡{name}, gracias por tu compra!
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Te enviaremos un mail a {email} confirmando tu compra. Tu token es
              {order.id}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <Link to="/">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  ¡Entendido!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchaseForm;
