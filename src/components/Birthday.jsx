import { useState } from 'react'
import data from '../consumables/birthday'

const Birthday = () => {
    const [ people, setPeople ] = useState(data)
    console.log(data)

    const clearAll =()=>{
        setPeople([])
    }
    const refetch = ()=>{
        setPeople(data)
    }

    const removePerson =(id)=>{
        const response = people.filter((person)=> person.id !== id)

        
        setPeople(response)
    }
  return (
    <div>
    {
        people.map((person, idx)=>{
            return(
                <div key={idx}>
                    <img src={person.imageUrl} alt={`${person.name}'s Image`} width={300} />
                    <h1 className='text-4xl font-bold'>{person.name}</h1>
                    <p>{person.age} years old</p>
                    <button onClick={()=> removePerson(person.id)} className='border border-red-300 px-3 py-2 rounded'>Remove</button>
                </div>
            )
        })
    }

<br />
<br />
    <div className="">
        <button className='border border-red-300 px-3 py-2 rounded' onClick={clearAll}>Clear All</button>
        <button className='border border-red-300 px-3 py-2 rounded' onClick={refetch}>Fetch all</button>
    </div>
    </div>
  )
}

export default Birthday
