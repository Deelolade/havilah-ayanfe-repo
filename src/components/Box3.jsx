import React, { useState } from 'react'
import { delay, motion, scale } from "framer-motion"


const Box3 = () => {
    const boxVariant = {
        hidden: {
            x: "-100vw"
        },
        visible: { 
            x: 0,
            transition: {
                delay: 0.5,
                when:"beforeChildren",
            staggerChildren:0.2

            }
        }
    }
    const listVariant = {
        hidden: {
            x: "-10",
            opacity:0
        },
        visible: {
            x: 0,
            opacity:1,
        }
    }
    return (
        <div>
            <motion.div
                // key={Math.random()}
                variants={boxVariant}
                animate="visible"
                initial="hidden"
                className="box w-60 h-60 my-12 bg-green-300 p-3 "
            >
                {
                    [1, 2, 3].map(box => {
                        return <motion.li
                            variants={listVariant}
                            
                            className='w-14 h-14 bg-white m-3  p-4 mx-auto' style={{ listStyle: "none" }}></motion.li>
                    })
                }

            </motion.div>
        </div>
    )
}

export default Box3
