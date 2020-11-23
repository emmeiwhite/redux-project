import React from "react";
import { connect } from "react-redux";
import {
  decrease,
  increase,
  MODAL_OPEN,
  reset,
} from "./../store/actions/actions";

function Counter({
  counter,
  increaseCounter,
  decreaseCounter,
  resetCounter,
  openModal,
  isModalOpen,
}) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        width: "400px",
        margin: "1rem auto",
      }}
    >
      <strong>Counter Component</strong>
      <h1>{counter}</h1>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={decreaseCounter}>Decrease</button>
      {isModalOpen ? (
        ""
      ) : (
        <div>
          <button onClick={openModal}>Open Modal</button>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = ({
  countState: { counter, name },
  modalState: { isModalOpen },
}) => {
  return {
    counter,
    name,
    isModalOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => {
      dispatch(increase());
    },
    decreaseCounter: () => {
      dispatch(decrease());
    },
    resetCounter: () => {
      dispatch(reset());
    },
    openModal: () => {
      dispatch({
        type: MODAL_OPEN,
        payload: {
          heading: "Modal Heading",
          text: "lorem30 lorem30 lorem 30",
        },
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
