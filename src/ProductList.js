import Product from "./Product";
import { connect } from "react-redux";

const ProductList = ({ products }) => {
  return (
    <div className="productList">
      {products.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(ProductList);
