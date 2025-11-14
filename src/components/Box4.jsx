import React from 'react'
import { motion } from 'framer-motion'
const Box4 = () => {
    return (
        <div className="">
            <motion.div
                animate={{
                    scale: [1, 1.4, 1.4, 1, 1],
                    borderRadius:['20%', '20%', "50%", "50%", "20%"],
                    rotate:[0, 0, 270, 270, 0]
                }}
                transition={{duration:2}}
                className="box w-52 h-52 bg-green-300 "
            >
        </motion.div>
        </div>
    )
}

export default Box4
