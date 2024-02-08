export function Temperatur({ celsius, onMinus, onPlus }) {
  return (
    <>
      <p>{celsius}</p>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
    </>
  );
}
