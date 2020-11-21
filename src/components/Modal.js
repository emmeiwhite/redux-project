import React from "react";
import { connect } from "react-redux";

function Modal({ name }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        width: "400px",
        margin: "1rem auto",
      }}
    >
      <strong>Modal Component</strong>
      <p>{name}</p>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.modalState.name,
  };
};

export default connect(mapStateToProps)(Modal);
