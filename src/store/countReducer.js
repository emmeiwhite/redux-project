import { DECREASE, INCREASE, RESET } from "./actions";
const initialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, counter: state.counter + 1 };
    case DECREASE:
      return { ...state, counter: state.counter - 1 };
    case RESET:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

export default rootReducer;
