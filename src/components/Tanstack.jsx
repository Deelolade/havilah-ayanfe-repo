import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

const Tanstack = () => {
  const [name, setName] = useState('')
  const getUsersAge = async (name) => {
    const res = await axios.get(`https://api.agify.io/?name=${name}`)
    return res.data.age
  }
  const { data: userAge, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: ()=> getUsersAge(name)
  })
  if (isLoading) {
    return <p> loading....</p>
  }
  if (isError) {
    return <p>Error occured while loaidng page...</p>
  }

  const handleUserAge = () => {
    console.log(name)
    console.log(userAge)
  }
  return (
    <div>

      <div className="space-x-3">
        <input type="text" placeholder='enter your name ' className=' px-2 border border-gray-500 ' onChange={(e)=> setName(e.target.value)}  />
        <button onClick={handleUserAge} className='border border-gray-500  px-3 py-1  rounded-sm '>click</button>
      </div>
      {/* {userAge} */}
    </div>
  )
}

export default Tanstack
