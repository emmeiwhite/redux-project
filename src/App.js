import "./App.css";
import Counter from "./components/Counter";
import Modal from "./components/Modal";
import Products from "./components/Products";
import { connect } from "react-redux";

function App({ isModalOpen }) {
  return (
    <div className="App">
      <p>
        <strong>State Managament with Redux</strong>
      </p>
      <Counter />
      {isModalOpen && <Modal />}

      <Products />
    </div>
  );
}

const mapStateToProps = ({ modalState: { isModalOpen } }) => {
  return {
    isModalOpen: isModalOpen,
  };
};
export default connect(mapStateToProps)(App);
