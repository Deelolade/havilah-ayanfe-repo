import { useState } from 'react'
import axios from 'axios'
import { useQueries } from '@tanstack/react-query'

const TanstackTwo = () => {
  const [name, setName] = useState('')
  const [nameTwo, setNameTwo] = useState('')

  const handleUserGender = async (name) => {
    const response = await axios.get(`https://api.genderize.io?name=${name}`)
    return response.data.gender;
  }

  const handleNationlity = async (name) => {
    const res = await axios.get(`https://api.nationalize.io?name=${name}`)
    console.log("clicked")
    return (res.data.country[0]);
  }

  const results = useQueries({
    queries: [
      {
        queryKey: ['gender'],
        queryFn: () => handleUserGender(name)
      },
      {
        queryKey: ['nationality'],
        queryFn: () => handleNationlity(nameTwo)
      }
    ]
  });
  const [genderQuery, nationalityQuery] = results;

  return (
    <>
      <h1 className='text-4xl '>Genderize</h1>
      <div className="space-x-3">
        <input type="text" placeholder='enter your name ' className=' px-2 border border-gray-500 ' onChange={(e) => setName(e.target.value)} />
        <button onClick={genderQuery.refetch} className='border border-gray-500  px-3 py-1 rounded-sm'>click</button>
      </div>
     {
      genderQuery.data && <h1>{name} is a {genderQuery.data} </h1>
     }

      {/* Nationalize  */}
      <h1 className='text-4xl '>Nationalize</h1>
      <div className="space-x-3">
        <input type="text" placeholder='enter your name ' className=' px-2 border border-gray-500 ' onChange={(e) => setNameTwo(e.target.value)} />
        <button onClick={nationalityQuery.refetch} className='border border-gray-500  px-3 py-1  rounded-sm '>click</button>
      </div>
      {
        nationalityQuery.data && <h1>{nameTwo} is from {nationalityQuery.data.country_id} with {nationalityQuery.data.probability * 100}</h1>
      }

    </>
  )
}

export default TanstackTwo
