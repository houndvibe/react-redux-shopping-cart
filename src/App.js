import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import { Header, Main, Footer, AppContainer } from "./StyledComponents";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer>
          <Header>
            <Link to="/">React Shopping Cart</Link>
            <Link to="/admin">Admin</Link>
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
