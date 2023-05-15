import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [factor, setFactor] = useState(1)
  const handlePlus=()=>{
   
    setCount(count+factor)
  }
  const handleMinus=()=>{
    
    setCount(count-factor)
  }
  const handleReset=()=>{
setCount(0)
  }
  return (
    <div className='container'>
      <h1 className=''>{count}</h1>
      <div> 
        {/* onclick takes function name or function declaration not a function call */}
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        Factor by which you want to implement?
        {/* input is string */}
        <input type='number' value={factor} onChange={(e)=>{e.target.valueAsNumber?setFactor(e.target.valueAsNumber):setFactor(1)}}/>
      </div>
    </div>
  );
}
export default Counter;

//QUESTIONS
//Difference between Props and state