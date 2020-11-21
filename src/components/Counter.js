import React from "react";
import { connect } from "react-redux";
import { DECREASE, INCREASE, RESET } from "./../store/actions/actions";

function Counter(props) {
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
      <h1>{props.counter}</h1>
      <button onClick={() => props.increaseCounter()}>Increase</button>
      <button onClick={() => props.resetCounter()}>Reset</button>
      <button onClick={() => props.decreaseCounter()}>Decrease</button>
    </div>
  );
}

const mapStateToProps = ({ countState: { counter, name } }) => {
  return {
    counter,
    name,
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
