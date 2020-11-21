import React from "react";
import data from "./data.json";
import Products from "./components/Products";

//feature-1

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React shoping cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products} />
            </div>
            <div className="sidebar"> Cart items</div>
          </div>
        </main>
        <footer>all rights reserved</footer>
      </div>
    );
  }
}

export default App;
