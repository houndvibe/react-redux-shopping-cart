import React from "react";

function CheckoutForm({ createOrder, handleInput }) {
  return (
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
  );
}

export default CheckoutForm;
