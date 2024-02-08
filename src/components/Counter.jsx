export function Counter({ counter, onDecrease, onReset, onIncrease }) {
  return (
    <>
      <p>{counter}</p>
      <button onClick={onDecrease}>-</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onIncrease}>+</button>
    </>
  );
}
