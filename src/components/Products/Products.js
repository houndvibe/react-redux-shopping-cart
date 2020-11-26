import React, { useState, useEffect } from "react";
import { Fade, Zoom } from "react-reveal";
import Modal from "react-modal";
import { connect, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/actions/productActions";
import { addToCart } from "../../store/actions/cartActions";
import ProductItem from "./ProductItem";
import ProductModal from "./ProductModal";
import { ProductsContainer } from "../../StyledComponents";

const Products = ({ fetchProducts, addToCart, products }) => {
  const [state, setState] = useState({ modalProduct: null });
  const { modalProduct } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => dispatch(fetchProducts(data)));
  }, [dispatch, fetchProducts]);

  const openModal = (modalProduct) => {
    setState({ modalProduct });
  };

  const closeModal = () => {
    setState({ modalProduct: null });
  };

  return (
    <ProductsContainer>
      <Fade bottom cascade>
        {!products ? (
          <div>Loading...</div>
        ) : (
          <ul className="products">
            {products.map((product) => (
              <ProductItem
                key={product._id}
                product={product}
                openModal={openModal}
                addToCart={addToCart}
              />
            ))}
          </ul>
        )}
      </Fade>
      {modalProduct && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
            <ProductModal
              key={modalProduct._id}
              closeModal={closeModal}
              addToCart={addToCart}
              modalProduct={modalProduct}
            />
          </Zoom>
        </Modal>
      )}
    </ProductsContainer>
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
