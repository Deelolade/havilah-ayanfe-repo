import React from 'react'

const Home = () => {
    return (
        <main>
            <div className="flex justify-center items-center h-[92vh]">
                <div className="text-center">
                    <h1 className='text-8xl font-bold text-blue-400 leading-34'>Web development</h1>
                    <p className='text-center text-blue-400'>Web development is a very interesting field from the frontend to the backend, all makes sense when you understand better</p>
                    <button className='px-10 py-1 text-sm font-semibold border border-blue-400 text-blue-400 mt-4 text-center hover:bg-blue-400 hover:text-white transition-colors duration-500 ease-in-out'>Learn More</button>
                </div>
            </div>
        </main>
    )
}

export default Home
