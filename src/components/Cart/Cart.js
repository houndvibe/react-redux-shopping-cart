import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import { Zoom } from "react-reveal";
import Modal from "react-modal";
import formatCurrency from "../../util";
import { removeFromCart } from "../../store/actions/cartActions";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import OrderModal from "../Orders/OrderModal";
import { Button, CartContainer, modalStyles } from "../../StyledComponents";

const Cart = ({ removeFromCart, cartItems }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    showCheckout: false,
  });

  const [orderList, setOrderList] = useState();
  const closeModal = () => {
    setOrderList();
  };

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: state.name,
      email: state.email,
      address: state.address,
      cartItems: cartItems,
    };
    setOrderList(order);
  };

  const cartItemsCount = cartItems
    .map((item) => item.count)
    .reduce((prev, next) => prev + next, 0);

  return (
    <CartContainer>
      {cartItemsCount === 0 ? (
        <div className="cart cart-header">Cart is empty</div>
      ) : cartItemsCount === 1 ? (
        <div className="cart cart-header">
          You have {cartItemsCount} item in the cart
        </div>
      ) : (
        <div className="cart cart-header">
          You have {cartItemsCount} items in the cart
        </div>
      )}
      <div>
        <div className="cart">
          <Fade left cascade>
            <ul className="cart-items">
              {cartItems.map((item) => (
                <CartItem
                  key={item._id}
                  removeFromCart={removeFromCart}
                  item={item}
                />
              ))}
            </ul>
          </Fade>
        </div>
        {cartItemsCount !== 0 && (
          <div>
            <div className="cart">
              <div className="total">
                <div>
                  Total:{" "}
                  {formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
                <Button
                  primary
                  onClick={() => {
                    setState({ showCheckout: true });
                  }}
                >
                  Proceed
                </Button>
              </div>
            </div>
            {state.showCheckout && (
              <Fade right cascade>
                <div className="cart">
                  <CheckoutForm
                    handleInput={handleInput}
                    createOrder={createOrder}
                  />
                </div>
              </Fade>
            )}
            {orderList && (
              <Fade right cascade>
                <Modal
                  style={modalStyles}
                  isOpen={true}
                  onRequestClose={closeModal}
                >
                  <Zoom>
                    <OrderModal closeModal={closeModal} orderList={orderList} />
                  </Zoom>
                </Modal>
              </Fade>
            )}
          </div>
        )}
      </div>
    </CartContainer>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (item) => dispatch(removeFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
