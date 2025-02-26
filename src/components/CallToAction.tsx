'use client'
import Image  from 'next/image';
import Emoji from "@/assets/images/emojistar.png"
import Helix from "@/assets/images/helix2.png"
import { motion } from 'motion/react';

export const CallToAction = () => {
  return (
    <section className="relative z-20 py-[72px] text-white text-center
      sm:py-24 flex items-center justify-center overflow-hidden">
      <div className="px-4">
        <div className="flex flex-col items-center justify-center gap-8">
          <h3 className="font-bold text-5xl/[48px] tracking-tighter">Get Instant Access</h3>
          <p className="text-white/70 w-[343px] md:w-[576px]">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
          <div className="flex flex-col w-full gap-2 sm:flex-row justify-center">
            <input placeholder="your@email.com" className="placeholder:text-white/80 px-5 h-12 items-center justify-start flex text-[#9CA3AF] bg-white/20 rounded-lg w-full sm:w-[248px]"/>
            <motion.button
              whileTap={{
                scale: 0.9
              }}
              className="rounded-lg bg-white text-black h-12 px-5"
            >Get access</motion.button>
          </div>
        </div>
      </div>
      <motion.div
        className='hidden sm:inline absolute z-30 left-[94%] lg:left-[70%]' draggable='false'
        drag
        dragSnapToOrigin
      >
        <Image src={ Helix } alt='helix' width={ 225 } height={ 225 } draggable='false'/>
      </motion.div>
      <motion.div
        drag
        dragSnapToOrigin
        className='hidden sm:inline absolute z-50 top-[-10px] right-[93%] lg:right-[70%]'
      >
        <Image src={ Emoji } alt='emoji' width={ 225 } height={ 225 } draggable='false'/>
      </motion.div>
    </section>
  );
};
