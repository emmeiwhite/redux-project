import React from "react";
import { connect } from "react-redux";
import {
  decrease,
  increase,
  modalopen,
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
          <button
            onClick={() =>
              openModal(
                "Emmeis Modal",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, mollitia? Vero consectetur sunt nobis quos, dicta beatae magni ex reiciendis labore illo eos blanditiis vitae! Eos nam eveniet quae, possimus dolor omnis amet quaerat harum, alias delectus, aliquam voluptatem cum."
              )
            }
          >
            Open Modal
          </button>
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
    openModal: (name, text) => {
      dispatch(modalopen(name, text));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
