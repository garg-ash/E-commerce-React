// /* eslint-disable react/prop-types */
// import React, { useContext } from "react";
// import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import { Link } from "react-router-dom";
// import { ecomcontext } from "./Main"


// function Cart() {
//   const {cart,handleRemoveFromCart}=useContext(ecomcontext)

//   return (
//     <div className="cart">
//       {cart.map((cartItem, index) => {
//         return (
//           <>
//             <div
//               key={index}
//               className="cart-item d-flex justify-center align-center mb-2"
//             >
//               <div className="left">
//                 <img src={cartItem.image} alt="" />
//               </div>
//               <div className="right">
//                 <h3>{cartItem.title}</h3>
//                 <p>
//                   <CurrencyRupeeIcon /> {cartItem.price}
//                 </p>
//                 <Link
//                   className="btn btn-secondary mt-1 d-inline-block"
//                   to=""
//                   onClick={(e) => handleRemoveFromCart(e, cartItem)}
//                 >
//                   Remove From Cart
//                 </Link>
//               </div>
//             </div>
//           </>
//         );
//       })}
//     </div>
//   );
// }

// export default Cart;



/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from "react-router-dom";
import { ecomcontext } from "./Main";

function Cart() {
  const { cart, handleRemoveFromCart } = useContext(ecomcontext);
  const [total,settotal]=useState(0)

  useEffect(()=>{
    function getcarttotal(){
      let total=0
      const totalPrice = cart.forEach((Item) =>{ 
       total= total + Item.price;
      })
     settotal(total)
    }
    getcarttotal()
  },
  [])
  
  

  return (
    <div className="cart">
      {cart.map((cartItem, index) => {
        return (
          <div
            key={index}
            className="cart-item d-flex justify-center align-center mb-2"
          >
            <div className="left">
              <img src={cartItem.image} alt="" />
            </div>
            <div className="right">
              <h3>{cartItem.title}</h3>
              <p>
                <CurrencyRupeeIcon /> {cartItem.price}
              </p>
              <Link
                className="btn btn-secondary mt-1 d-inline-block"
                to=""
                onClick={(e) => handleRemoveFromCart(e, cartItem)}
              >
                Remove From Cart
              </Link>
            </div>
          </div>
        );
      })}
      {/* Display total price */}
      <div className="total-price">
        <h3>Total Price: <CurrencyRupeeIcon /> {total}</h3>
      </div>
    </div>
  );
}

export default Cart;
