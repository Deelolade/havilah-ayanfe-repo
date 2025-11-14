import React, { useState } from 'react'

const StateTwo = () => {
    const [brand, setBrand ] = useState("Iphone")
    const [color, setColor ] = useState("red")
    const [model, setModel ] = useState("12 Pro")

    const [phone, setPhone] =useState({
        color: "green",
        brand: "Iphone",
        model: 13
    })
  return (
    <>
      <h1 className='text-4xl font-semibold'>My {brand} is a {color} {brand} {model}</h1>
      <h1 className='text-4xl font-semibold'>My {phone.brand} is a {phone.color} {phone.brand} {phone.model}</h1>
    </>
  )
}

export default StateTwo
