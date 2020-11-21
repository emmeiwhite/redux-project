import React from "react";
import { connect } from "react-redux";

function Products({ name }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        width: "800px",
        margin: "1rem auto",
      }}
    >
      <h3>My Products </h3>
      <p>{name}</p>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.productState.name,
  };
};

export default connect(mapStateToProps)(Products);
