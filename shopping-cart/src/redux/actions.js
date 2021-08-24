import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

export const addCreator = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};

export const removeCreator = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};
