import React from "react";
import formatCurrency from "../../util";
import { Button } from "../../StyledComponents";

function CartItem({ item, removeFromCart }) {
  return (
    <li>
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
              " (" + formatCurrency(item.count * item.price) + ")"}{" "}
          </div>

          <Button className="button" onClick={() => removeFromCart(item)}>
            Remove
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
