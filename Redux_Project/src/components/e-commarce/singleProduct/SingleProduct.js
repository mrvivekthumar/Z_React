import React from "react";
import "./SingleProduct.css"
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";

function SingleProduct({ product }) {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cartReducer.cart);

  // This is called conditional rendering.
  //  If product is perfectly fetched then it will work other it will be zero.
  const curItem = product ? cart.find((item) => item.id === product.id) : null;
  const curQuantity = curItem ? curItem.quantity : 0;

  return (
    <div className="SingleProduct">
      {product ? (
        <>
          <img className="productImg" src={product.images[0]} alt={product.title} />

          <div className="productInfo">
            <h2 className="productTitle">{product.title}</h2>
            <p className="productPrice">{product.price}</p>
            <p>Category : {product.category.name}</p>
          </div>

          <div className="cartInfo">
            <button className="button" onClick={() => dispatch(removeFromCart(product.id))}>-</button>
            <h4>{curQuantity}</h4>
            <button className="button" onClick={() => dispatch(addToCart(product.id))}>+</button>

          </div>
        </>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
}

export default SingleProduct;
