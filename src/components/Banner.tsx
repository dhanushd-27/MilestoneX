"use client"

import { motion } from 'motion/react'
export function Banner() {
  return (
    <motion.div
    initial={{ background: "linear-gradient(to right, #FCD6FF, #29D8FF, #FFFD80, #F89ABF, #FCD6FF)" }}
    animate={{ background: ["linear-gradient(to right,  #FCD6FF, #29D8FF, #FFFD80, #F89ABF, #FCD6FF)", "linear-gradient(to right, #29D8FF, #FFFD80, #F89ABF, #FCD6FF, #FCD6FF)", "linear-gradient(to right, #FFFD80, #F89ABF, #FCD6FF, #FCD6FF, #29D8FF)", "linear-gradient(to right, #F89ABF, #FCD6FF, #FCD6FF, #29D8FF, #FFFD80)"] }}
    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
    className="p-2 flex justify-center items-center gap-1"
    >
      <p className='w-max text-black hidden sm:block'>
        Introducing a completely redesigned interface - 
      </p>
      <span
        className='underline w-max'
      >
        Explore the Demo
      </span>
    </motion.div>
  )
}
