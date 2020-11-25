import React from "react";
import formatCurrency from "../util";

function ProductModal({ closeModal, modalProduct, addToCart }) {
  return (
    <>
      <button className="close-modal" onClick={closeModal}>
        x
      </button>

      <div className="product-details">
        <img src={modalProduct.image} alt={modalProduct.title}></img>
        <div className="product-details-description">
          <p>
            <strong>{modalProduct.title}</strong>
          </p>
          <p>{modalProduct.description}</p>
          <p>
            Available Sizes:{" "}
            {modalProduct.availableSizes.map((x) => (
              <span>
                {" "}
                <button className="button">{x}</button>
              </span>
            ))}
          </p>
          <div className="product-price">
            <div>{formatCurrency(modalProduct.price)}</div>
            <button
              className="button primary"
              onClick={() => {
                addToCart(modalProduct);
                closeModal();
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModal;
