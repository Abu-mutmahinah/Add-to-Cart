import { combineReducers } from "redux";
import ShopReducer from "./Shopping/Shopping-reducer";

const RootReducer = combineReducers({
  shop: ShopReducer,
});

export default RootReducer;
