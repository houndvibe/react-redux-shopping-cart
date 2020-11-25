import React from "react";
import formatCurrency from "../util";

function ProductItem({ product, openModal, addToCart }) {
  return (
    <li>
      <div className="product">
        <a href={"#" + product._id} onClick={() => openModal(product)}>
          <img src={product.image} alt={product.title}></img>
          <p>{product.title}</p>
        </a>
        <div className="product-price">
          <div>{formatCurrency(product.price)}</div>
          <button onClick={() => addToCart(product)} className="button primary">
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
