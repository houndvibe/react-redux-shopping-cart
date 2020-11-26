import React from "react";
import formatCurrency from "../../util";
import { Button } from "../../StyledComponents";

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
          <Button primary onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
