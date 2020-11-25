import React, { useState } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions/cartActions";

const Cart = ({ removeFromCart, cartItems }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    showCheckout: false,
  });

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: state.name,
      email: state.email,
      addres: state.addres,
      cartItems: cartItems,
    };
    alert(JSON.stringify(order));
  };

  const cartItemsCount = cartItems
    .map((item) => item.count)
    .reduce((prev, next) => prev + next, 0);

  return (
    <div>
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
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className="right">
                      <div>
                        {" "}
                        {formatCurrency(item.price)} x {item.count}{" "}
                        {item.count > 1 &&
                          " " +
                            "(" +
                            formatCurrency(item.count * item.price) +
                            ")"}{" "}
                      </div>

                      <button
                        className="button"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
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
                <button
                  onClick={() => {
                    setState({ showCheckout: true });
                  }}
                  className="button primary"
                >
                  Proceed
                </button>
              </div>
            </div>
            {state.showCheckout && (
              <Fade right cascade>
                <div className="cart">
                  <form onSubmit={(e) => createOrder(e)}>
                    <ul className="form-container">
                      <li>
                        <label>Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          onChange={(e) => handleInput(e)}
                        ></input>
                      </li>
                      <li>
                        <label>Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          onChange={(e) => handleInput(e)}
                        ></input>
                      </li>
                      <li>
                        <label>Address</label>
                        <input
                          name="address"
                          type="text"
                          required
                          onChange={(e) => handleInput(e)}
                        ></input>
                      </li>
                      <li>
                        <button className="button primary" type="submit">
                          Checkout
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </Fade>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (item) => dispatch(removeFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
