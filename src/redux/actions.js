// action constant

import axios from "axios";

export const FETCH_PRODUCTS_LOADING = "FETCH_PRODUCTS_LOADING";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";

export const ADD_TO_CART = "ADD_TO_CART";

// action creators

export const fetchProduct = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_LOADING });
  try {
    const res = await axios.get(`https://fakestoreapi.com/products`);
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data });
    console.log(res.data);
  } catch (err) {
    dispatch({ type: FETCH_PRODUCTS_ERROR, payload: err.message });
  }
};

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
