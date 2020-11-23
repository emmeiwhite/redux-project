import React, { useState } from "react";
import { connect } from "react-redux";
import { MODAL_CLOSE } from "./../store/actions/actions";
import "./Modal.css";

function Modal({ name, modalClose }) {
  // const [isOpen, setIsOpen] = useState(false); To be stored in Reducer and handler is also there now

  // const handleClick = () => {
  //   setIsOpen(false);
  // };
  return (
    <main className={`modal`}>
      <h1>Modal :{name}</h1>
      <button className="closeBtn" onClick={modalClose}>
        Close Modal
      </button>
      {/* <div className="modal-content">
        <div>
          <h1>This is my Modal</h1>
          <button className="closeBtn" onClick={handleClick}>
            Close Modal
          </button>
        </div>
      </div> */}
    </main>
  );
}

const mapStateToProps = ({ modalState: { name, isModalOPen } }) => {
  return {
    name: name,
    isModalOPen: isModalOPen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalClose: () => {
      dispatch({ type: MODAL_CLOSE });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
