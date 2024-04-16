import './App.css'
import React, {useState} from "react"
function App() {
  let [counter, setCounter]=useState(5)
  const addValue=()=>{
    // counter=counter+1;
    setCounter(counter+1);
  }
  const removeValue=()=>{
    // counter=counter-1;
    setCounter(counter-1)
  }

  return (
    <>
      <h1>hii</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
