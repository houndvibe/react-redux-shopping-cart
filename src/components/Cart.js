import React, { Component } from "react";
import formatCurrency from "../util";

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
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
                        onClick={() => this.props.removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {cartItemsCount !== 0 && (
            <div className="cart">
              <div className="total">
                <div>
                  Total:{" "}
                  {formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
                <button className="button primary">Proceed</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
