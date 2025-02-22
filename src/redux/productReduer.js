import { FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS } from "./actions";

const intialState = { products: [], loading: false, error: null };
export const productReducer = (state = intialState, action) => {
  console.log(state, action, "in reducer");
  switch (action.type) {
    case FETCH_PRODUCTS_LOADING:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
