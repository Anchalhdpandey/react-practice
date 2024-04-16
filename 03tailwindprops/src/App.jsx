import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"anchal",
    age:21
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    <Card channel="chai and code" someObj={myobj} btnText="click me"/>
    <Card channel="Anchal" someObj={myobj} btnText="Follow me"/>
    </>
  )
}

export default App
