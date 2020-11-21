import React, { useState } from "react";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <div>
      <p>There are no accidents</p>
      <h1>{props.counter}</h1>
      <button onClick={() => props.increaseCounter()}>Increase</button>
      <button onClick={() => props.resetCounter()}>Reset</button>
      <button onClick={() => props.decreaseCounter()}>Decrease</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => {
      dispatch({ type: "INCREASE" });
    },
    decreaseCounter: () => {
      dispatch({ type: "DECREASE" });
    },
    resetCounter: () => {
      dispatch({ type: "RESET" });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);