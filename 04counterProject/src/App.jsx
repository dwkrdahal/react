
import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);
  let [msg, setMsg] = useState('');

  const addCount = () => {

    setMsg('')
    if (counter < 20) {
      counter++;
      setCounter(counter);
      console.log(counter);
    } else{
      setMsg('Maximum Limit reached')
    }
    
  }

  const subCount = () => {
    setMsg('')

    if (counter > 0) {
      counter--;
      setCounter(counter);
      console.log(counter); 
    } else{
      setMsg('minimum limit reached')
    }
    
  }

  return (
    <>
    <h1>My First Counter Project</h1>

    <h3>Count is {counter} </h3>

    <button onClick={addCount} >
      Add Count {counter}
    </button>

    <br/> <br/>

    <button onClick={subCount}>
      Subtract Count {counter}
    </button>

    <br/> <br/>
      
    {msg}

    </>
  )
}

export default App
