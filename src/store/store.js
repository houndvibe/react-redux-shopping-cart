import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const initialState = {};

const store = createStore(
  combineReducers({
    products: productReducer,
    cart: cartReducer,
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
