import React from "react";
import formatCurrency from "../../util";
import {
  Button,
  ProductModalContainer,
  CloseModal,
} from "../../StyledComponents";

function ProductModal({ closeModal, modalProduct, addToCart }) {
  return (
    <ProductModalContainer>
      <CloseModal onClick={closeModal}>x</CloseModal>

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
            <Button
              primary
              onClick={() => {
                addToCart(modalProduct);
                closeModal();
              }}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </ProductModalContainer>
  );
}

export default ProductModal;
