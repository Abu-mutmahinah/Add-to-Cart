import { useState, useEffect } from "react";
import CartItem from "./cartItem";
import { connect } from "react-redux";

const Cart = ({ Cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    Cart.forEach((data) => {
      items += data.qty;
      price += data.qty * data.price;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [Cart, totalItems, totalPrice, setTotalItems, setTotalPrice]);

  return (
    <div className=" container  row ">
      <div className="align-text-center ">
        <div className="">
          {Cart.map((item) => {
            return (
              <div className="mt-5 col-lg-12 d-flex justify-content-center">
                <CartItem key={item.id} itemData={item} />
              </div>
            );
          })}
        </div>

        <div className="  my-5 container p-3">
          <div className="cart-summary text-center ">
            <h2 className="fw-bold">Cart Summary</h2>
            <div className="price-container">
              <p>TOTAL:({totalItems} items)</p>
              <p>$ {totalPrice}</p>
            </div>
            <button className="px-5 ">
              <h4 className="fw-bold  ">Buy Now</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(Cart);
