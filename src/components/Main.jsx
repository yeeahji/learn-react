import Counter from './Counter.jsx'
import {useState} from "react";

export default function Main() {

  const [total, setTotal] = useState(0);

  const handleToTal = () => {
    setTotal(total + 1);
  }

  return (
    <main>
      <h2>total: {total}</h2>
      <Counter onTotal={handleToTal}/>
      <br />
      <br />
      <Counter onTotal={handleToTal}/>
    </main>
  )
}
