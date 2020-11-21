import { DECREASE, INCREASE, RESET } from "./../actions/actions";
const initialState = {
  counter: 0,
  name: "Imran Rafiq Rather",
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
