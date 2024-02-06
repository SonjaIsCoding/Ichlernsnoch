import { useState } from "react";
import "./App.css";
import { HelloWorld } from "./HelloWorld/HelloWorld";

function App() {
  const [counter, setCounter] = useState(0);

  function handleDecrease() {
    return setCounter(counter - 1);
  }
  function handleIncrease() {
    return setCounter(counter + 1);
  }

  return (
    (<HelloWorld />),
    (
      <counter>
        <>
          <p>{counter}</p>
          <button onClick={handleDecrease}>-</button>
          <button onClick={handleIncrease}>+</button>
        </>
      </counter>
    )
  );
}

export default App;
