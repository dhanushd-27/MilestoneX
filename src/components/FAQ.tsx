"use client"

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react';
import Plus from "@/assets/icons/plus.svg"
import Minus from "@/assets/icons/minus.svg"
import Image from 'next/image';

interface FAQProps {
  question: string,
  answer: string
}

export default function FAQ({ question, answer }: FAQProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='border-b border-white/50'>
      <div onClick={ () => { setOpen(!isOpen) }} className='flex items-center justify-between my-8'>
        <h6 className='font-bold text-[18px]/[28px]'>{ question }</h6>
        { !isOpen 
          ? 
            <Image src={ Plus } alt="plus-svg" width={ 24 } height={ 24 } className='invert'></Image> 
          : 
            <Image src={ Minus } alt='minus-alt' width={24} height={24} className='invert'></Image>
        }
      </div>

      <AnimatePresence>
        { isOpen 
          ? 
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  marginBottom: 0
                }}
                animate={{
                  opacity: 1,
                  height: 'auto',
                  marginBottom: 32
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  marginBottom: 0
                }}

                className='flex items-center justify-between text-center'
              >
                { answer }
              </motion.div>
          : 
            null
        }
      </AnimatePresence>
    </div>
  )
}
