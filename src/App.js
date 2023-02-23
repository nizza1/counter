
import './App.css';
import React,{useState} from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1 className='logo'>🍌</h1>
      <h1>Banana Bank</h1>
      <div>
        <h2>Dein Girokonto</h2>
        <p className='outPut'>{count}</p>
        <input type="number" onChange={(e)=>{setCounter(Number(e.target.value))}} />
        <div>
        <button onClick={()=>setCount(count + counter)}>einzahlen</button>
        <button onClick={()=>setCount(count - counter)}>Auszahlen</button>
        </div>
      </div>
    </div>
  );
}

export default App;
