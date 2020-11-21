import countReducer from "./countReducer";
import productReducer from "./productReducer";
import modalReducer from "./modalReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  countState: countReducer,
  modalState: modalReducer,
  productState: productReducer,
});

export default rootReducer;
