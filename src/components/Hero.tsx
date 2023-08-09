import React from "react";
import { BsArrowRight } from 'react-icons/bs';
const Hero = () => {
  return (
    <div>
      <div className="w-full sm:h-50">
        <img
          src="/assets/background.png"
          className="h-screen w-screen object-cover blur-1xl"
          alt="Background"
        />
        
        {/* Top left logo outline */}
        <div className="absolute top-16 left-16 sm:top-8 left-8">
          <img
            src="/assets/vitlogo.png"
            alt="Left Logo"
            className="w-full h-20 md:10 sm:h-12"
          />
        </div>
        
        {/* Top right logo outline */}
        <div className="absolute top-16 right-20 sm:top-8 right-6">
          <img
            src="/assets/technovitlogo.png"
            alt="Right Logo"
            className="w-full h-30 md:10 sm:h-12"
          />
        </div>
        
        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-9xl sm:text-7xl md:text-7xl font-monty bg-clip-text text-transparent bg-gradient-to-t from-stone-600 to-white">
            TECHNOVIT<span className="text-6xl sm:text-xl md:text-5xl">'23</span>
          </h1>
          
          {/* Small Text */}
          <div className="text-white text-base sm:text-sm text-6xl font-light italic capitalize text-center mt-6 sm:text-left">
          light of future it's AI
        </div>
          {/* Button */}
          <button className="w-50 h-10 sm:w-23 sm:h-10 rounded-full p-6 border border-white mt-6 flex items-center justify-center">
            <div className="text-white flex gap-2 text-sm font-normal capitalize">
              <p >Register Now</p>
              <p><BsArrowRight size={20} /></p>
            </div>
          </button>

        </div>

      </div>
    </div>
  );
};

export default Hero;
