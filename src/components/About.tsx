import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex justify-between md:flex-col md:gap-6 sm:flex-col sm:gap-4 px-32 md:px-28 sm:px-16 py-4 h-full">
        <div className="">
          <h2 className="font-monty bg-clip-text text-transparent bg-gradient-to-tl from-stone-600 to-white text-center text-6xl md:text-6xl sm:text-5xl uppercase">
            About
          </h2>
        </div>
        <div className="lg:w-8/12">
          <p className=" text-neutral-100 font-monty font-extralight text-justify md:text-left sm:text-left text-3xl md:text-2xl sm:text-lg !leading-normal">
            This is the 7th Edition of technoVIT, an international level
            technical festival of VIT Chennai.It gives us immense pride and
            pleasure in presenting technoVIT' 23. This technical extravaganza
            will be filled with numerous activities such as workshops and
            technical events organised by the various schools of the University
            with the primary objective being, " nurture professional skills and
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
