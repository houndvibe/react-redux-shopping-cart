import React from "react";
import { CloseModal, OrderInfo } from "../../StyledComponents";

function OrderModal({ closeModal, orderList }) {
  return (
    <OrderInfo>
      <CloseModal onClick={closeModal}>x</CloseModal>
      <div>
        <h1>Your order confirmed!</h1>
        <hr />
        <p>{orderList.name}</p>
        <p>{orderList.email}</p>
        <p>{orderList.address}</p>
        <p>Your order:</p>
        <div>
          {orderList.cartItems.map((item, index) => (
            <p key={item._id}>
              {index + 1 + ". " + item.title + " x" + item.count}
            </p>
          ))}
        </div>
      </div>
    </OrderInfo>
  );
}

export default OrderModal;
