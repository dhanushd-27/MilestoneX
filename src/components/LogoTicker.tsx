"use client"

import { motion } from "motion/react";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from 'next/image';

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <section className="w-full
      flex flex-col justify-center items-center gap-8
      overflow-hidden
      px-4 py-[72px]
      sm:w-full sm:py-24"
    >
      <h6 className="inline-block text-white/70 text-xl/[28px] text-center">Trusted by the world&apos;s <span className="block sm:inline">innovative teams</span></h6>
      <div className="flex-none w-[343px] overflow-hidden
        sm:w-[768px]
      ">
        <motion.div className="flex gap-16 pr-16"
          initial={{
            translateX: 0
          }}
          animate={{
            translateX: '-70%',
          }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity
          }}
          
        >
          { images.map(({src, alt}) => (
            <Image src={ src } alt={ alt } key={ alt } height={32}></Image>
          ))}
          { images.map(({src, alt}) => (
            <Image src={ src } alt={ alt } key={ alt } height={32}></Image>
          ))}
        </motion.div>
      </div>
    </section>
  )
};
