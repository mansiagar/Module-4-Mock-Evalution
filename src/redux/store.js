import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { productReducer } from "./productReduer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

export const store = createStore(
  productReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
