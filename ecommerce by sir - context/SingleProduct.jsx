/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { ecomcontext } from "./Main"

function SingleProduct() {
  const { id } = useParams();
  const [single, setSingle] = useState({});
  const {cart, isProductAddedInCart,handleAddToCart,handleRemoveFromCart}=useContext(ecomcontext)


  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      setSingle(result);
    });

  return (
    <div className="container">
      <div className="single singleProduct d-flex">
        <div className="left">
          <img src={single.image} alt="" />
        </div>
        <div className="right">
          <h3>{single.title}</h3>
          <p>{single.description}</p>
          <p className="d-flex"> <CurrencyRupeeIcon /> {single.price}</p>
          {isProductAddedInCart(single) ? (
            <Link className="btn btn-secondary mt-1 d-inline-block" to="" onClick={(e) => handleRemoveFromCart(e, single)}>
              Remove From Cart
            </Link>
          ) : (
            <Link className="btn btn-primary mt-1 d-inline-block" to="" onClick={(e) => handleAddToCart(e, single)}>
              Add To Cart
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
