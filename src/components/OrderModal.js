import React from "react";

function OrderModal({ closeModal, orderList }) {
  return (
    <>
      <button className="close-modal" onClick={closeModal}>
        x
      </button>
      <div className="order-info">
        <h1>Your order confirmed!</h1>
        <hr />
        <p>{orderList.name}</p>
        <p>{orderList.email}</p>
        <p>{orderList.address}</p>
        <p>Your order:</p>
        <p>
          {orderList.cartItems.map((item, index) => (
            <p>{index + 1 + ". " + item.title + " x" + item.count}</p>
          ))}
        </p>
      </div>
    </>
  );
}

export default OrderModal;
