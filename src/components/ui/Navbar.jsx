import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-blue-400'>
        <nav className=' h-[8vh] flex justify-between items-center bg-blue-400 max-w-6xl mx-auto '>
            <div className="">
                <h2 className='text-xl font-semibold text-white'><Link to='/'>Logo</Link></h2>
            </div>
            <div className="">
                <ul className='flex items-center space-x-4'>
                    <li className='text-sm text-white font-semibold'><Link to='/about'>About</Link></li>
                    <li className='text-sm text-white font-semibold'><Link to='/contact'>Contact</Link></li>
                    <li className='text-sm text-white font-semibold'><Link to='/career'>Careers</Link></li>
                    <li><button className='bg-white text-blue-400 shadow-2xl px-3 py-1 rounded-md font-semibold'>Log in</button></li>
                    <li><button className='bg-blue-400 text-white shadow-2xl border border-white px-3 py-1 rounded-md font-semibold'>Sign up</button></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
