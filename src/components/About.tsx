import React from "react";

const About = () => {
  return (
    <>
      <div className="flex px-32 md:px-28 sm:px-16  flex-col justify-center ">
        <div className="mt-8">
          <div className="absolute animate-pulse">
            <svg>circle</svg>
          </div>
          <img
            src="/assets/stars.svg"
            className="w-28 sm:w-16 mt-4 opacity-75"
          ></img>
          <h2 className="z-100 font-monty bg-clip-text text-transparent bg-gradient-to-tl from-stone-600 to-white text-center text-7xl md:text-6xl sm:text-4xl uppercase">
            About technoVIT
          </h2>
        </div>
        <div className="grid place-items-center">
          <div className=" absolute right-1/3 shadow-purple-900 opacity-30 md:opacity:10 sm:opacity:5 w-300 h-200 shadow-[0_0_20em_20em] "></div>
          <p className="z-10 text-neutral-100 font-monty font-extralight text-justify mt-6 lg:w-10/12 text-4xl md:text-3xl sm:text-2xl pt-4">
            This is the 8<sup>th</sup> Edition of TechnoVIT, an international
            level technical festival of VIT Chennai. It gives us immense pride
            and pleasure in presenting TechnoVIT' 23. This technical
            extravaganza will be filled with numerous activities such as
            workshops and technical events organised by the various schools of
            the University with the primary objective being, "nurture
            professional skills and impart fine qualities to the students". It
            also has gaming events to thrill and create an environment with fun
            and frolic. Additionally, technical exhibitions from various
            organisations are being hosted. We, at VIT Chennai promise the
            audience an atmosphere of immense joy leaving them the thirst for
            more.
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export default About;
