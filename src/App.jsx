import { useState } from 'react';
import './App.scss'

function App() {
  let [counter, setCounter] = useState(0)

  const increment = () => {
    counter++;
    setCounter(counter);
  }
  const decrement = () => {
    counter--;
    setCounter(counter);
  }

  return (
    <div className='mainCounter'>
      <div className='counterContainer'>
        <h1>Me Aur Code</h1>
        <p>{counter}</p>
        <button onClick={increment}>Increment</button>
        <br />
        <br />
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}

export default App
