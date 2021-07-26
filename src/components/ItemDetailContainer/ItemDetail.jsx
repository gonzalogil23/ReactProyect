import React from "react";
import CartForm from "../CartForm";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

function ItemDetail({ item }) {
  const [cart, setCart] = useState([]);

  const productAdded = useRef(true);

  const getProduct = (form, product) => {
    form.preventDefault();

    let itemAdded = {
      name: product.name,
      type: product.type,
      price: product.price,
      qty: form.target[1].value,
    };
    setCart([...cart, itemAdded]);
  };

  useEffect(() => {
    if (productAdded.current) {
      productAdded.current = false;
    } else {
      alert("¡Producto añadido al carrito!");
    }
  }, [cart]);

  return (
    <>
      {item && (
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={item.img}
                className="d-block mx-lg-auto img-fluid"
                alt=""
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold lh-1 mb-3">{item.name}</h2>
              <p className="lead">{item.desc}</p>
              <p className="">{item.winery}</p>
              <p>{item.type}</p>
              <p>
                <small>{item.price}</small>
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                {" "}
                <CartForm addCart={getProduct} />
              </div>
            </div>
          </div>
        </div>
        // <div className="modal" tabindex="-1" id="exampleModal">
        //   <div className="modal-dialog modal-dialog-centered">
        //     <div className="modal-content">
        //       <div className="modal-header">
        //         <h4 className="modal-title">{item.name}</h4>
        //         <button
        //           type="button"
        //           className="btn-close"
        //           data-bs-dismiss="modal"
        //           aria-label="Close"
        //         ></button>
        //       </div>
        //       <div className="modal-body row">
        //         <div className="col-md-4">
        //           <img className="imgDetail" src={item.img} alt="" />
        //         </div>
        //         <div className="col-md-8">
        //           <h5>{item.desc}</h5>
        //           <p>{item.winery}</p>
        //           <p>{item.type}</p>
        //           <p>
        //             <small>{item.price}</small>
        //           </p>
        //         </div>
        //       </div>
        //       <div className="modal-footer">

        //       </div>
        //     </div>
        //   </div>
        // </div>
      )}
    </>
  );
}

export default ItemDetail;
