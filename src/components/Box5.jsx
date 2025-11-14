import React from 'react'
import { motion, useAnimation } from 'framer-motion'
const Box4 = () => {
    const control = useAnimation()
    return (
        <div className=" my-12">
            <button 
            onClick={()=>{
                control.start({
                    x:1500,
                    transition:{
                        duration:2
                    }
                })
            }}
            className=' bg-amber-500 text-white rounded-lg px-3 py-1 mx-2 hover:bg-amber-600'>Move right</button>
            <button onClick={()=>{
                control.start({
                    x:0,
                    transition:{
                        duration:2
                    }
                })
            }}
            className=' bg-amber-500 text-white rounded-lg px-3 py-1 mx-2 hover:bg-amber-600'>Move left</button>
            <button 
            onClick={()=>{
                control.start({
                    borderRadius:"50%",
                    transition:{
                        duration:1
                    }
                })
            }}className=' bg-amber-500 text-white rounded-lg px-3 py-1 mx-2 hover:bg-amber-600'>Circle</button>
            <button onClick={()=>{
                control.start({
                    borderRadius:"0",
                    transition:{
                        duration:1
                    }
                })
            }}className=' bg-amber-500 text-white rounded-lg px-3 py-1 mx-2 hover:bg-amber-600'>Square</button>
            <button 
            onClick={()=>{
                control.stop()
            }}className=' bg-amber-500 text-white rounded-lg px-3 py-1 mx-2 hover:bg-amber-600'>Stop</button>
            <motion.div
                animate={control}
                className="box w-52 h-52 my-6 bg-green-300 "
            >
        </motion.div>
        </div>
    )
}

export default Box4
