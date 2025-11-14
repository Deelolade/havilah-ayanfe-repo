import React, { useState } from 'react'
import { motion } from "framer-motion"

const Box1 = () => {
    const [isAnimating, setIsAnimating]= useState(false)
    return (
        <div>
            <motion.div
                className="box w-52 h-52 bg-green-300 opacity-50"
                animate={{
                    x: isAnimating ? 1000 : 0,
                    opacity:isAnimating ? 1 : 0.5,
                    rotate:isAnimating ? 360 : 0
                }}
                initial={{
                    opacity: 0.1,
                }}
                transition={{
                    type:"spring",
                    // type: 'tween',
                    // duration:2, //for tween type
                    stiffness:60, //for spring type 
                    // damping: 100 
                }}
                onClick={()=>setIsAnimating(prev=>(!prev) )}
            >

            </motion.div>
        </div>
    )
}

export default Box1
