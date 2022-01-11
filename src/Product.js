import { connect } from "react-redux";
import { addToCart } from "./Redux/Shopping/Shopping-action";

const Product = ({ item, addToCart }) => {
  return (
    <div className="product">
      <div>
        <img
          src={item.src}
          alt={item.title}
          style={{ height: "250px", width: "200px", borderRadius: "6px" }}
        />

        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>{item.title}</p>
            <p>$ {item.price}.00</p>
          </div>

          <button className="product-btn" onClick={() => addToCart(item.id)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(null, mapDispatchToProps)(Product);
