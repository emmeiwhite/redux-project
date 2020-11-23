import React from "react";
import { connect } from "react-redux";
import {
  DECREASE,
  INCREASE,
  MODAL_OPEN,
  RESET,
} from "./../store/actions/actions";

function Counter({
  counter,
  increaseCounter,
  decreaseCounter,
  resetCounter,
  openModal,
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
      <div>
        <button onClick={openModal}>Open Modal</button>
      </div>
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
      dispatch({ type: INCREASE });
    },
    decreaseCounter: () => {
      dispatch({ type: DECREASE });
    },
    resetCounter: () => {
      dispatch({ type: RESET });
    },
    openModal: () => {
      dispatch({ type: MODAL_OPEN });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
