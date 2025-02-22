import { ADD_TO_CART } from "./actions";

const intialState = { cart: [] };
export const cartReducer = (state = intialState, action) => {
  console.log(state, action, "in Cart");
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};
