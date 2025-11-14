import React, {  useState,useEffect } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);


        return () => clearInterval(interval)
    },[])
   
    
  return (
    <div>
      {count} counts
    </div>
  )
}

export default UseEffect
