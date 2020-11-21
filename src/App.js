import "./App.css";
import Counter from "./components/Counter";
import Modal from "./components/Modal";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <p>
        <strong>State Managament with Redux</strong>
      </p>
      <Counter />
      <Modal />
      <Products />
    </div>
  );
}

export default App;
