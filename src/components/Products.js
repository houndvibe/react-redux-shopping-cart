import React, { useState, useEffect } from "react";
import { Fade, Zoom } from "react-reveal";
import Modal from "react-modal";
import { connect, useDispatch } from "react-redux";
import formatCurrency from "../util";
import { fetchProducts } from "../store/actions/productActions";
import { addToCart } from "../store/actions/cartActions";

const Products = ({ fetchProducts, addToCart, products }) => {
  const [state, setState] = useState({ modalProduct: null });
  const { modalProduct } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => dispatch(fetchProducts(data)));
  }, []);

  const openModal = (modalProduct) => {
    setState({ modalProduct });
  };

  const closeModal = () => {
    setState({ modalProduct: null });
  };

  return (
    <div>
      <Fade bottom cascade>
        {!products ? (
          <div>Loading...</div>
        ) : (
          <ul className="products">
            {products.map((product) => (
              <li key={product._id}>
                <div className="product">
                  <a
                    href={"#" + product._id}
                    onClick={() => openModal(product)}
                  >
                    <img src={product.image} alt={product.title}></img>
                    <p>{product.title}</p>
                  </a>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button
                      onClick={() => addToCart(product)}
                      className="button primary"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Fade>
      {modalProduct && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
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
          </Zoom>
        </Modal>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (data) => dispatch(fetchProducts(data)),
  addToCart: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
