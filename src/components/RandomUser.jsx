import React, { useState } from 'react'

const RandomUser = () => {
  const [ userData, setUserData]= useState([])
  const fetchUserData = async(num)=>{
    const apiUrl = await fetch(`https://randomuser.me/api/?results=${num}`)
    const res = await apiUrl.json()
    setUserData(res.results)
  }
  const data = 3; 
  return (
    <div> 
      {
        userData.map((user, idx)=>{
          return(
            <div className=""key={idx}>
              <img src={user.picture.large} alt="" />
              <p>{user.name.title} {user.name.first} {user.name.last}</p>
            </div>
          )
        })
      }
      <button onClick={() => fetchUserData(data)}>fetch</button>
    </div>

    
  )
}

export default RandomUser
