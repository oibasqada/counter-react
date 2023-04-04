import React, {useState} from "react";

const App = () => {
  const [counter, setCounter] = useState(0)
    const [value, setValue] = useState(0)
    const [result, setResult] = useState(0)

  const handleIncrement = () => {
    setResult(counter + value)
  }

  const handleDecrement = () => {
    setResult(counter - value)
  }

  return (
      <div className={'math'}>
        <h3>{result}</h3>
          <input type="number" onChange={(e) => setValue(Number(e.target.value))}/>
          <input type="number" onChange={(e) => setCounter(Number(e.target.value))}/>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
  );
};

export default App;