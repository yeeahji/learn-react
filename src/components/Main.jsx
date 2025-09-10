import Counter from './Counter.jsx'
import {useState} from "react";

export default function Main() {

  const [total, setTotal] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleToTal = () => {
    setTotal(total + 1);
  }

  return (
    <main>
      <h2>total: {total}</h2>
      <h2>flag: {flag.toString()}</h2>
      <button onClick={() => setFlag(!flag)}>toggle flag</button>
      <Counter onTotal={handleToTal}/>
      <hr />
      <Counter onTotal={handleToTal}/>
      <hr />
      <Counter />
    </main>
  )
}

