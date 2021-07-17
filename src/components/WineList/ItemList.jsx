import React from 'react';
import CartForm from '../CartForm';
import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';

function ItemList({ wines = [] }) {
  const [cart,setCart] = useState([]);
  const productAdded = useRef(true);

  const getProduct = (form, product) => {
      form.preventDefault();

      let itemAdded = {
          name : product.name,
          type : product.type,
          price : product.price,
          qty : form.target[1].value,            
      }
      setCart ([...cart, itemAdded]);
  }

  useEffect(()=>{
      if(productAdded.current) {
          productAdded.current = false;
      } else {
          alert('¡Producto añadido al carrito!');
      }
  },[cart]);

  
    return (
        <>
        {wines.length === 0 ? (
            <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : 
        (  wines.map((wine, i) => (
          <div className="card rounded" key={i}>
  {/* <img src={prop.image} className="card-img-top" alt=""/> */}
  <div className="card-body">
    <h5 className="card-title">{wine.name}</h5>
    <h6 className='card-subtitle'>{wine.winery}</h6>
    <p class="card-text">{wine.type}</p>
    <p class="card-text"><small class="text-muted">$ {wine.price}</small></p>
  </div> <div>
    <CartForm  addCart = {getProduct}/>
  </div>
  </div>
          ))
        )}
    </>)
}

export default ItemList;
