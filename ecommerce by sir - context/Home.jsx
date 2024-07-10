/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from "react-router-dom";
import { ecomcontext } from "./Main";

function Home() {
  const [products, setProducts] = useState([]);
  const {cart, isProductAddedInCart,summarize,handleAddToCart,handleRemoveFromCart}=useContext(ecomcontext)

  // useEffect - runs a code maximum once

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setProducts(result);
      });
  }, []);
  console.log(cart);

  return (
    <div className="products">
      {products.map((product, index) => {
        return (
          <div className="product" key={index}>
            <Link to={`/singleProduct/${product.id}`}>
              <img src={product.image} alt="Product Image" />
            </Link>
            <h3>
              <Link to={`/singleProduct/${product.id}`}>{summarize(product.title)}</Link>
            </h3>
            <p className="d-flex justify-center">
              <CurrencyRupeeIcon /> {product.price}
            </p>

            {isProductAddedInCart(product) ? (
              <Link
                className="btn btn-secondary"
                to=""
                onClick={(e) => handleRemoveFromCart(e, product)}>
                Remove From Cart
              </Link>
            ) : (
              <Link
                className="btn btn-primary"
                to=""
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add To Cart
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Home;
