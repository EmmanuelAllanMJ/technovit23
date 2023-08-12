import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="flex px-32 md:px-28 sm:px-16 md:pt-60 sm:pt-10 h-screen flex-col justify-center">
        <div className="mt-8">
          <h2 className="font-monty bg-clip-text text-transparent bg-gradient-to-tl from-stone-600 to-white text-center text-6xl md:text-6xl sm:text-5xl uppercase">
            About technoVIT
          </h2>
        </div>
        <div className="grid place-items-center">
          <p className=" text-neutral-100 font-monty font-extralight text-justify lg:w-10/12 text-3xl md:text-2xl sm:text-lg !leading-normal pt-4">
            This is the 7<sup>th</sup> Edition of technoVIT, an international level
            technical festival of VIT Chennai. It gives us immense pride and
            pleasure in presenting technoVIT' 23. This technical extravaganza
            will be filled with numerous activities such as workshops and
            technical events organised by the various schools of the University
            with the primary objective being, "nurture professional skills and
            impart fine qualities to the students". It also has gaming events to
            thrill and create an environment with fun and frolic. Additionally,
            technical exhibitions from various organisations are being hosted.
            We, at VIT Chennai promise the audience an atmosphere of immense joy
            leaving them the thirst for more
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
