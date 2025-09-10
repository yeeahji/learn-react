import { useState } from "react";

export default function Counter({ onTotal }) {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
    if (onTotal) {
      onTotal();
    }
  }

  return (
    <button onClick={handleCounter}>Counter: {counter}</button>
  )
}
