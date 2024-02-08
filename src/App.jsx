import { useState } from "react";
import "./App.css";
import { HelloWorld } from "./components/HelloWorld";
import { Counter } from "./components/Counter";

// Als App bin ich auch eine Komponente
function App() {
  // Magic function 🦄, die in der App sein muss!
  // Ansonsten weiß die App nicht, wo man diesen Wert ändern soll
  // Render gefälligst neu
  const [counter, setCounter] = useState(0);

  function handleDecrease() {
    setCounter((prevCount) => {
      if (prevCount > 0) {
        setCounter((prevCount) => {
          return prevCount - 1;
        });
      } else {
        setCounter(0);
      }
    });
  }

  function handleIncrease() {
    setCounter((prevCount) => {
      return prevCount + 1;
    });
  }

  function handleReset() {
    setCounter(0);
  }

  return (
    <>
      <HelloWorld />
      <Counter
        counter={counter}
        onDecrease={handleDecrease}
        onReset={handleReset}
        onIncrease={handleIncrease}
      />
    </>
  );
}

export default App;
