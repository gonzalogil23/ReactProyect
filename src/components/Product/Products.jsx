// import React from 'react';
// import {useState} from 'react';
// // import CartForm from './CartForm';

// function Products(props) {
// const [qty, setQty] = useState(1);

//   return (
// <div>
//             <div className="card rounded">
//   <img src={props.image} className="card-img-top" alt=""/>
//   <div className="card-body">
//     <h5 className="card-title">{props.title}</h5>
//     <p class="card-text">{props.type}</p>
//     <p class="card-text"><small class="text-muted">$ {props.price}</small></p>
//   </div> 
//   <form action="" onSubmit={(data)=>{props.addCart(data,props)}}>
//                 <button type='button' className= "rounded-start btn btn-outline-dark btn-sm" onClick={()=>{setQty(qty - 1)}}>-</button>
//                 <input type='number'disabled value={qty}/>
//                 <button type='button' className= "rounded-end btn btn-outline-dark btn-sm" onClick={()=>{setQty(qty + 1)}}>+</button>
//                 <button type="submit" className= "btn btn-primary">Agregar</button>
//   </form>
//             </div>
// </div>
//     )
// }

// export default Products
