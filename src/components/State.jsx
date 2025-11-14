import React, { useState } from 'react'
import "../css/style.css"
const State = () => {
const [count, setCount] = useState(0);
const [color,setColor] =useState("blue")

const handleIncrement= ()=>{
  setCount(count + 1)
}

const handleDecrement = ()=>{
  if( count > 0){
    setCount(count - 1)
  }

}

const handleRedChange = ()=>{
if (color !== "red"){
  setColor("red")
}
}
  
  return (
    <>
      
      <div className="container">
        <h1>{count}</h1>
        <button className='increment' onClick={handleIncrement}>increment</button>
      <button className='decrement' onClick={handleDecrement}>decrement</button>
      </div>

    <div className="">
      <div className="color-container" style={{backgroundColor:color, width:"400px", height:"500px"}}>
      </div>
       <button className='increment' onClick={handleRedChange}>Red</button>
       <button className='increment' onClick={()=> setColor("blue")}>Blue</button>
       <button className='increment' onClick={()=> setColor("green")}>green</button>
    </div>

    </>
  )
}

export default State
