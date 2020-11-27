import styled from "styled-components";

//Button
export const Button = styled.button`
  padding: 1rem;
  border: 0.1rem #c0c0c0 solid;
  background-color: #f0f0f0;
  max-height: 40px;
  cursor: pointer;
  font-size: 1.6rem;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-weight: bold;
  background-color: ${(props) => (props.primary ? "#f0c040" : "#f0f0f0")};
  :hover {
    border: 0.1rem #808080 solid;
  }
`;
//CloseModal
export const CloseModal = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 1000;
`;

//App.js
export const Header = styled.header`
  grid-area: header;
  background-color: #203040;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  a {
    color: white;
    text-decoration: none;
    :hover {
      color: #ff8000;
    }
  }
`;

export const Main = styled.main`
  grid-area: main;
`;

export const Footer = styled.footer`
  grid-area: footer;
  background-color: #203040;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: 5rem 1fr 5rem;
  grid-template-columns: 1fr;
  height: 100%;
  font-size: 1.6rem;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  a {
    text-decoration: none;
  }
`;

//AdminScreen.js
export const AdminContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2,
  Button {
    margin-left: 20px;
  }
`;
//Orders.js
export const Table = styled.table`
  border-collapse: collapse;
  margin: 20px;

  thead {
    background-color: lightgrey;
  }
  td,
  th {
    padding: 20px;
    border: 1px solid black;
  }
`;

//HomeScreen.js
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  .main {
    flex: 3 60rem;
  }
  .sidebar {
    flex: 1 20rem;
  }
`;

// Cart
export const CartContainer = styled.div`
  .cart {
    padding: 1rem;
    margin: 1rem;
    display: flex;
  }
  .cart-header {
    border-bottom: 0.1rem #c0c0c0 solid;
  }
  .cart-items {
    padding: 0;
    width: 100%;
    list-style-type: none;
    img {
      width: 5rem;
    }
    li {
      display: flex;
      div {
        padding: 0.5rem;
        :last-child {
          flex: 1;
        }
      }
    }
  }
  .right {
    display: flex;
    justify-content: space-between;
  }
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    div {
      font-size: 2rem;
    }
    div,
    button {
      flex: 1;
    }
  }
`;
export const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    minWidth: "700px",
    transform: "translate(-50%, -50%)",
  },
};
//CheckoutForm
export const Form = styled.form`
  width: 100%;
  ul {
    width: 100%;
    padding: 0;
    list-style-type: none;
  }
  ul li {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  input {
    height: 10px;
    padding: 1rem;
    border: 0.1rem #c0c0c0 solid;
  }
`;
//Filter
export const FilterContainer = styled.div`
  display: flex;
  padding: 1rem;
  margin: 1rem;
  border-bottom: 0.1rem #c0c0c0 solid;
  justify-content: space-between;
  div {
    flex: 1;
  }
`;
//Product
export const ProductsContainer = styled.div`
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style-type: none;
    li {
      flex: 0 1 29rem;
      height: 47rem;
      padding: 1rem;
    }
    .product {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      img {
        max-width: 37rem;
        max-height: 37rem;
      }
    }
    .product-price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        font-size: 2rem;
      }
      div,
      button {
        text-align: center;
        flex: 1;
      }
    }
  }
`;

//ProductModal
export const ProductModalContainer = styled.div`
  font-size: 1.6rem;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  .product-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-height: 96vh;
    img {
      max-height: 82vh;
      max-width: 46rem;
      margin: 0 auto;
    }
  }
  .product-details-description {
    flex: 1 1;
    margin: 1rem;
  }
  .close-modal {
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 1000;
  }
`;

//OrderModal
export const OrderInfo = styled.div`
  font-size: 1.6rem;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
`;
