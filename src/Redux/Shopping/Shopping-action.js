import * as actionType from "./Shopping-type";

export const addToCart = (itemId) => {
  return {
    type: actionType.ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};

export const removeFromCart = (id) => {
  return {
    type: actionType.REMOVE_FROM_CART,
    payload: id,
  };
};

export const adjustQty = (itemId, value) => {
  return {
    type: actionType.ADJUST_QTY,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionType.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
