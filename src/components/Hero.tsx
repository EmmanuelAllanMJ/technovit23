'use client'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from "next/link";
import React, { useEffect } from 'react';
const Hero = () => {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/#about",
    },
    {
      title: "Events",
      href: "/#events",
    },
    {
      title: "Merch",
      href: "merch",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ]
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { y: '50%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 2, ease: 'easeInOut' } },
  };

  return (
    <div>
      <div className="hidden md:flex lg:flex absolute z-10 mt-48 right-0 text-slate-400 flex-col gap-20">
        {navItems.map((item) => (
          <li
            className="block m-0 pt-[20px] pb-0 px-0 rotate-90 cursor-pointer"
            key={item.title}
          >
            <Link href={`/${item.href}`}>{item.title}</Link>
          </li>
        ))}
      </div>
      <div className="w-full sm:h-50 ">
        <img
          src="/assets/background.jpg"
          className="h-screen w-screen object-cover blur-1xl"
          alt="Background"
        />

        <div className="absolute top-16 left-16 sm:left-0 sm:top-8 px-4 brightness-0 invert">
          <img
            src="/assets/vitlogo.png"
            alt="Left Logo"
            className="w-full h-10 lg:h-20 "
          />
        </div>
        <div className="absolute top-16 right-16 sm:right-0 sm:top-8 px-4">
          <img
            src="/assets/technovitlogo.png"
            alt="Right Logo"
            className="w-full h-10 lg:h-24"
          />
        </div>
        <div
          className="absolute inset-0 pt-[30vh] sm:pt-[10vh] flex flex-col justify-center items-center"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <div className="text-9xl sm:text-4xl md:text-7xl pl-14 sm:pl-9 mt-20 font-monty tracking-widest"
        ref={ref}>
        <motion.span
          variants={textVariants}
          initial="hidden"
          animate={controls}
          className="block"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, #FFF 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          TECHNOVIT'23
{/*           <span
            className="text-5xl sm:text-xl font-monty"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, #FFF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            '23 
          </span> */}
        </motion.span>
      </div>
          <div className="text-white text-3xl sm:text-xl font-monty italic mt-4">Light of the Future - AI</div>
          <a href='https://vitchennaievents.com/conf1/' target="_blank" className="mt-8 ml-2 rounded-[90px] border-2 border-purple-600 w-52
           h-16 sm:w-44 sm:h-14 md:w-48 md:h-16 lg:w-52 lg:h-16 flex justify-center 
           items-center text-[#C8B8EC] text-base font-medium cursor-pointer 
           bg-opacity-80 hover:bg-purple-500/10 hover:text-purple-200 transition-all duration-300">
            <div className="text-[#C8B8EC] text-base font-medium">Register Now</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
