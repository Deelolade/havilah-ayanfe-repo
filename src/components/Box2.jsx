import React, { useState } from 'react'
import { motion } from "framer-motion"

const Box2 = () => {
    return (
        <div>
            <motion.div
                whileHover={{
                    scale:1.1
                }}
                whileTap={{
                    scale:0.9
                }}
                drag
                dragConstraints={{
                    right:20,
                    left: -20,
                    top:5, 
                    bottom: 5
                }}
                className="box w-52 h-52 my-12 bg-green-300 "
            >

            </motion.div>
        </div>
    )
}

export default Box2
