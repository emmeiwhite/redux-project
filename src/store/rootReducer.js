import countReducer from "./countReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: countReducer,
});

export default rootReducer;
