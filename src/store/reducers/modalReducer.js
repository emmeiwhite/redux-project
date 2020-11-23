import { MODAL_OPEN, MODAL_CLOSE } from "./../actions/actions";

const initialState = {
  isModalOpen: false,
  name: "",
  text: "",
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_CLOSE:
      return { ...state, isModalOpen: false };
    case MODAL_OPEN:
      return {
        ...state,
        isModalOpen: true,
        name: action.payload.name,
        text: action.payload.text,
      };
    default:
      return state;
  }
};

export default modalReducer;
