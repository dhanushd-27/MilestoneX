"use client"

import Image from "next/image";
import ArrowR from "@/assets/icons/arrow-w.svg"
import Cursor from "@/assets/images/cursor.png"
import Message from "@/assets/images/message.png"
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <main className="bg-[linear-gradient(to_bottom,rgba(32,13,66,0.2),rgba(32,13,66,1),rgba(79,33,161,1),rgba(164,110,219,1))] 
    w-full py-[72px] relative
    overflow-hidden
    sm:py-24">

      {/* Below div should be above */}
      <div className="
        w-full h-max flex justify-center items-center
      ">
        <div className="
          flex flex-col items-center justify-center text-white
          w-[343px] h-[460px]
          z-10
          sm:w-[576px] sm:h-[516px]
          relative
          ">
              <div className="w-max flex justify-center items-center gap-3 py-1 px-2 rounded-lg border border-gray-400">
                <motion.span className="bg-[linear-gradient(to_right,_#F87AFF,_#FB93D0,_#FFDD99,_#C3F0B2,_#2FD8FE)] text-transparent bg-clip-text"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '50% 0%'],
                    backgroundSize: ["200%", "100%"]
                  }}
                  transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  Version 2.0 is here
                </motion.span> 
                <span className="flex gap-1 justify-center items-center cursor-pointer">
                  Read More
                  <Image src={ ArrowR } alt="arrow-right" width={16} height={16} className="invert"></Image>
                </span>
              </div>
            <h1 className="
              pt-8 font-bold tracking-tighter text-7xl text-center
              sm:text-9xl sm:tracking-tighter
            "><span>One Task </span><span>at a Time</span></h1>

            <p className="
              text-xl font-regular text-center mt-8
              sm:w-[448px]
            ">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>

            <motion.button
              whileTap={{
                scale: 0.9
              }}
              className='bg-white rounded-lg px-5 py-2 text-black mt-8 cursor-pointer hover:bg-slate-50'
            >
              Get for free
            </motion.button>

            <motion.div className="hidden sm:inline absolute z-20 left-[-22%] top-[40%] cursor-pointer"
              drag
              dragSnapToOrigin
            >
              <Image src={Cursor} alt="cursor" width={200} height={200} className="max-w-none" draggable="false"></Image>
            </motion.div>

            <motion.div className="hidden sm:inline absolute z-20 right-[-27%] top-32 cursor-pointer"
              drag
              dragSnapToOrigin
            >
              <Image src={Message} alt="message" width={200} height={200} className="max-w-none" draggable="false"></Image>
            </motion.div>
        </div>
      </div>

      {/* this div should be behind */}
      <div className="
        absolute
        top-[85%] left-1/2 -translate-x-1/2
        h-[400px] w-[800px]
        sm:h-[768px] sm:w-[1536px]
        md:h-[1200px] md:w-[2400px]
        sm:top-[83%]
        rounded-[100%] 
        bg-[radial-gradient(ellipse_at_center,_#000000,_#000000_62%,_#B48CDE)] 
        border border-[#161616]">
      </div> 
    </main>
  )
};
