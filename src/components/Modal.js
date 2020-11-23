import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { modalclose } from "./../store/actions/actions";
import "./Modal.css";
const Modal = ({ isModalOpen, name, text, closeModal }) => {
  // const isModalOpen = true;
  return (
    <div className={`modal-overlay ${isModalOpen ? `isModalOpen` : null}`}>
      <div className="modal-container">
        <h4>{name}</h4>
        <p>{text}</p>
        <button className="btn btn-primary" onClick={closeModal}>
          close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
function mapStateToProps({ modalState: { isModalOpen, name, text } }) {
  return { isModalOpen, name, text };
}
function mapDispatchToProps(dispatch) {
  return { closeModal: () => dispatch(modalclose()) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
