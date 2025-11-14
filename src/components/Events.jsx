import React from 'react'

const Events = () => {
    const handleClick = ()=>{
        alert("Button has clicked !!")
    }
  return (
    <div>
      <h1 className='text-2xl '>This is a button that displays an alert</h1>
      <button onClick={handleClick} className='border border-gray-500 rounded-md py-1 px-2 font-medium hover:bg-gray-50'>Alert</button>
    </div>
  )
}

export default Events
