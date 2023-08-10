"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonVariants = {
    moving: { y: -10 },
    stopped: { y: 0 },
  };
  return (
    <div>
      <div className="w-full sm:h-50 ">
        <img
          src="/assets/background.png"
          className="h-screen w-screen object-cover blur-1xl"
          alt="Background"
        />

        <div className="absolute top-16 left-16 sm:top-8">
          <img
            src="/assets/vitlogo.png"
            alt="Left Logo"
            className="w-full h-20 md:10 sm:h-12"
          />
        </div>

        <div className="absolute top-16 right-20 sm:top-8 ">
          <img
            src="/assets/technovitlogo.png"
            alt="Right Logo"
            className="w-full h-30 md:10 sm:h-12"
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center mt-28">
          <h1 className="text-9xl sm:text-4xl md:text-7xl font-monty bg-clip-text text-transparent bg-gradient-to-t from-stone-600 to-white tracking-widest">
            TECHNOVIT
            <span className="text-6xl sm:text-xl md:text-5xl">'23</span>
          </h1>

          <div className="text-white text-2xl sm:text-sm font-monty italic capitalize text-center mt-6 sm:text-left">
            light of future it's AI
          </div>
          <motion.button
            className="w-40 h-16 sm:w-23 rounded-full p-2 border border-white mt-20 mb-10 flex items-center justify-center"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            variants={buttonVariants}
            initial="moving"
            animate={isHovered ? "stopped" : "moving"}
            whileHover="stopped"
          >
            <div className="text-white flex gap-2 font-normal capitalize">
              <p>Register Now</p>
              <p>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <BsArrowRight size={20} />
                </motion.span>
              </p>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
