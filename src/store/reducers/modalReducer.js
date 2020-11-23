import { MODAL_OPEN, MODAL_CLOSE } from "./../actions/actions";

const initialState = {
  isModalOpen: false,
  name: "modalReducer",
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_CLOSE:
      return { ...state, isModalOpen: false };
    case MODAL_OPEN:
      return { ...state, isModalOpen: true };
    default:
      return state;
  }
};

export default modalReducer;
