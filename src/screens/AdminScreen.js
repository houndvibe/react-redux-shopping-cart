import React from "react";
import Orders from "../components/Orders/Orders";
import { AdminContainer } from "../StyledComponents";

const AdminScreen = () => {
  return (
    <AdminContainer>
      <Orders />
    </AdminContainer>
  );
};

export default AdminScreen;
