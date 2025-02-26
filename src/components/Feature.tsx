"use client"

import Image from 'next/image';
import Ecosystem from "@/assets/icons/ecosystem.svg"
import { useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'motion/react';

interface featureType{
  title: string,
  description: string
}

export default function Feature({title, description}: featureType) {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`
  const refComp = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if(!refComp.current) return;
      const borderRect = refComp.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [offsetX, offsetY])

  return (
    <div
      className='text-white text-center
        w-[343px] h-[264px] 
        flex flex-col items-center justify-center gap-2
        border border-white/30 rounded-xl
        sm:w-[234px] sm:h-[312px]
        lg:w-[330px] lg:h-[264px]
        relative
      '
      >
      <motion.div className='absolute inset-0 border-2 border-purple-400 rounded-xl' style={{
            maskImage: maskImage
        }}
        ref={ refComp }
        ></motion.div>
      <div className='w-14 h-14 bg-white/80 rounded-lg 
      m-2
      flex justify-center items-center' 
      >
        <Image src={ Ecosystem } alt="ecosystem-img" height={ 20 } width={ 20 }
        ></Image>
      </div>
      <h5 className='font-bold text-[16px]/[24px]'>{ title }</h5>
      <p className='w-[303px] text-white/70
        sm:h-[128px] sm:w-[194.67px]
      '>{ description }</p>
  </div>
  )
}
