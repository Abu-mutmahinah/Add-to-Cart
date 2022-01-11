import React, { useEffect, useState } from "react";
import cart_icon from "./icons/cart.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = ({ cart }) => {
  const [cartCount, setCartcount] = useState(0);

  useEffect(() => {
    let count = 0;

    cart.forEach((item) => {
      count += item.qty;
    });

    setCartcount(count);
  }, [cart, cartCount]);
  return (
    <div className="Navbar container-fluid px-lg-5">
      <Link to="./">
        <h1 className="text-primary">ELETRONIC SHOP</h1>
      </Link>

      <Link to="/cart">
        <div className="cart">
          <img
            src={cart_icon}
            alt="cart"
            style={{ width: "30px", height: "30px" }}
          />
          <h2>{cartCount}</h2>
        </div>
      </Link>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(NavBar);
