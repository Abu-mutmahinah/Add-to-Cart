import { useState } from "react";
import Delete from "../icons/Delete.png";
import { connect } from "react-redux";
import { adjustQty, removeFromCart } from "../Redux/Shopping/Shopping-action";
import React from "react";

const CartItem = ({ itemData, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(itemData.qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };
  return (
    <div className=" cartItem-container  d-flex align-items-center">
      <img src={itemData.src} alt="" />
      <div>
        <div className="fw-bold h4 mx-3">
          <p> {itemData.title}</p>
          <p>{itemData.description}</p>
          <p>${itemData.price}.00</p>
        </div>
        <div className="d-flex mx-5 fw-bold ">
          <label htmlFor="qty">Qty:</label>
          <input
            style={{ width: "30px" }}
            type="number"
            min="1"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
          <button onClick={() => removeFromCart(itemData.id)}>
            <img
              src={Delete}
              alt="delete cart"
              style={{ width: "10px", height: "10px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
