// import React from 'react';
// import Products from './Products';
// import {useState} from 'react';
// import {useEffect} from 'react';
// import {useRef} from 'react';

// function ProductContainer() {
//     const [cart,setCart] = useState([]);
//     const productAdded = useRef(true);

//     const getProduct =(form, product) => {
//         form.preventDefault();

//         let itemAdded = {
//             name : product.name,
//             type : product.type,
//             price : product.price,
//             qty : form.target[1].value,            
//         }
//         setCart ([...cart, itemAdded]);
//     }
//     useEffect(()=>{
//         if(productAdded.current){
//             productAdded.current = false;
//         } else {
//             alert('¡Producto añadido al carrito!');
//         }
//     },[cart]);

//     return (
//         <div>
//             <Products 
//             title="Gaia - Domaine Bousquet"
//             type="Malbec" 
//             image="../assets/img/GaiaMalbec.jpg" 
//             addCart = {getProduct}
//             price= {3700}
//             />
            
//         </div>
//     )
// }

// export default ProductContainer
