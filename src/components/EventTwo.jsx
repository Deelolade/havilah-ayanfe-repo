

const EventTwo = () => {
    const handleClick = (data)=>{
        alert(data)
    }
  return (
     <div>
      <h1 className='text-2xl '>My favorite footballer is Ronaldo </h1>
      <button onClick={()=> handleClick("Speeed says Suuuiiiiiiii!!!")} className='border border-gray-500 rounded-md py-1 px-2 font-medium hover:bg-gray-50'>Click</button>
    </div>
  )
}

export default EventTwo
