import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import { Header, Main, Footer, AppContainer } from "./StyledComponents";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer>
          <Header>
            <NavLink to="/">React Shopping Cart</NavLink>
            <NavLink to="/admin">Admin</NavLink>
          </Header>
          <Main>
            <Route path="/admin" component={AdminScreen} />
            <Route path="/" component={HomeScreen} exact />
          </Main>
          <Footer>All right is reserved.</Footer>
        </AppContainer>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
