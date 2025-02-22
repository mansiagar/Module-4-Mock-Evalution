import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { productReducer } from "./productReduer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { cartReducer } from "./cartReducer";

// const rootReducer = combineReducers({
//   cart: cartReducer,
//   products: productReducer,
// });
export const store = createStore(
  productReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
