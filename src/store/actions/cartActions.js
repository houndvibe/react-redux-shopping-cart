import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = [...getState().cart.cartItems];
  let alreadyExists = false;

  cartItems.forEach((x) => {
    if (x._id === product._id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }

  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  let cartItems = [...getState().cart.cartItems].filter(
    (x) => x._id !== product._id
  );

  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
