import React from "react";

const HeroSection = () => {
  return (
    <section className="h-screen relative overflow-hidden">

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-stone-900 to-purple-300"
      ></div>
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-8">
        {/* Top left logo */}
        <img
          src="/path-to-your-left-logo.png"
          alt="Left Logo"
          className="absolute top-0 left-0 p-4"
        />
        {/* Top right logo */}
        <img
          src="/path-to-your-right-logo.png"
          alt="Right Logo"
          className="absolute top-0 right-0 p-4"
        />

        <div className="Technovit text-white text-4xl sm:text-6xl md:text-9xl font-normal tracking-widest text-center sm:text-left">
          TECHNOVIT
        </div>
        <div className="23 text-white text-3xl sm:text-5xl md:text-6xl font-normal tracking-widest mt-2">
          ’23
        </div>
        <div className="text-white text-base sm:text-lg md:text-xl font-light capitalize mt-2 text-center sm:text-left">
          light of future it's AI
        </div>
        <button className="w-36 h-10 sm:w-46 sm:h-14 px-6 sm:px-12 py-2 sm:py-3 rounded-full border border-white flex justify-center items-center gap-2 mt-4">
          <div className="text-white text-sm sm:text-lg font-normal capitalize">
            Register Now
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
