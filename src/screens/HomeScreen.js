import React from "react";
import Filter from "../components/Filter/Filter";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
import { Content } from "../StyledComponents";

const HomeScreen = () => {
  return (
    <Content>
      <div className="main">
        <Filter></Filter>
        <Products></Products>
      </div>
      <div className="sidebar">
        <Cart />
      </div>
    </Content>
  );
};
export default HomeScreen;
