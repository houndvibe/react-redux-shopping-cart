import React from "react";
import { Button, Form } from "../../StyledComponents";

function CheckoutForm({ createOrder, handleInput }) {
  return (
    <Form onSubmit={(e) => createOrder(e)}>
      <ul>
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
          <Button primary type="submit">
            Checkout
          </Button>
        </li>
      </ul>
    </Form>
  );
}

export default CheckoutForm;
