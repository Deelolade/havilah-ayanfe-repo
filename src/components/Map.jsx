
import React from 'react'

const Map = () => {
  const data = ["John", "Havlilah", "Samuel", "Dare", "Ayanfe", "Gideon",];
  
  const handleClick = (name)=>{
    alert(`${name} has clicked the button !!`)
  }
  return (
    <div>
      {
        data.map((name) => {
          return (
            <>
              <h1 className='text-3xl font-semibold'>{name} is my favorite Classmate.</h1>
              <button onClick={()=> handleClick(name)}  className=' my-3 border border-gray-500 rounded-md py-1 px-2 font-medium hover:bg-gray-50'> Display Alert</button>

            </>
          )
        })
      }
    </div>
  )
}

export default Map
