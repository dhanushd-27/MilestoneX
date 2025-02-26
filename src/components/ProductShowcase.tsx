"use client"

import appScreen from "@/assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "motion/react";
import Image from 'next/image';
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"]
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="py-[72px] 
      flex items-center flex-col text-center justify-center gap-[56px]
      sm:py-24
    ">
      <div className="flex flex-col text-white gap-4 w-[343px]
      sm:w-[576px]">
        <h3 className="font-bold text-5xl/[48px] tracking-tighter">Intuitive Interface</h3>
        <p className="font-normal text-xl/[28px] text-white/70">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
      </div>
      <motion.div className="w-[343px] sm:w-[450px] md:w-[736px] lg:w-[1024px]"
        style={{
          rotateX: rotateX,
          opacity: opacity,
          transformPerspective: '800px'
        }}
        ref={ appImage }
      >
        <Image src={ appScreen } alt="appScreen" className="shadow-md shadow-white/20"></Image>
      </motion.div>
    </div>
  )
};
