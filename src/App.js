import React from "react";
import NavBar from "./NavBar";
import ProductList from "./ProductList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./cart/cart";
import Scroll from "./Scroll/Scroll";

const App = () => {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Scroll>
              <ProductList />
            </Scroll>
          </Route>

          <Route path="/cart">
            <Scroll>
              <Cart />
            </Scroll>
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
