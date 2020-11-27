import React, { useState } from "react";
import { Table, Button } from "../../StyledComponents";
import formatCurrency from "../../util";

export default function Orders() {
  let adminOrders = JSON.parse(localStorage.getItem("adminOrders"));

  const [showTable, setShowTable] = useState(true);

  const clearStorage = () => {
    localStorage.clear();
    setShowTable(false);
  };

  return (
    <div>
      {!adminOrders || !showTable ? (
        <div>No orders found</div>
      ) : (
        <>
          <h2>Orders list (localStorage):</h2>
          <Table>
            <thead>
              <th>Name</th>
              <th>E-mail</th>
              <th>Address</th>
              <th>Items</th>
              <th>Total price</th>
            </thead>
            <tbody>
              {adminOrders.map((order) => (
                <tr>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.address}</td>
                  <td>
                    {order.cartItems.map((item) => (
                      <div>
                        {item.title} x {item.count}
                      </div>
                    ))}
                  </td>
                  <td className="price">
                    {formatCurrency(
                      order.cartItems
                        .map((item) => item.price)
                        .reduce((a, b) => a + b)
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button onClick={clearStorage}> Clear Orders History</Button>
        </>
      )}
    </div>
  );
}
