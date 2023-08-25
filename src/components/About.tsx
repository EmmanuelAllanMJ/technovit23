import React from "react";
import Image from "next/image";
import TechnoLogo from "../../public/assets/technovit-logo.svg";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="flex px-32 md:px-28 sm:px-8  flex-col justify-center mt-12 mb-16" id="about">
        <div className="">

          <div className="flex items-center justify-center mt-6 px-8 py-4 bg-gradient-to-br from-[#544374]/40 to-[#0D0626]/40 rounded-xl border border-[#544374]/40">
            <Image src={TechnoLogo} alt="TechnoVIT Logo" width={200} height={200} className="mx-auto w-full" />
          </div>

          <div className="flex items-center justify-beween w-full">
            <img
              src="/assets/stars.svg"
              className="w-28 sm:w-8 mt-4 opacity-50"
            ></img>


          </div>


          <h2 className="z-100 font-monty bg-clip-text text-transparent bg-gradient-to-tl from-stone-600 to-white text-center text-7xl md:text-6xl sm:text-4xl">
            About TechnoVIT
          </h2>
        </div>
        <div className="grid place-items-center">
          <div className=" absolute right-1/3 shadow-purple-900 opacity-30 md:opacity:10 sm:opacity:5 w-300 h-200 shadow-[0_0_20em_20em] "></div>
          <p className="z-10 text-neutral-100 font-monty font-extralight text-justify mt-6 lg:w-10/12 text-md md:text-2xl lg:text-2xl pt-4">
          Welcome to the electrifying launch of the 8<sup>th</sup> Edition of TechnoVIT - a beacon of innovation and brilliance! Embark on a remarkable journey at TechnoVIT '23, where the stage is set for an unparalleled technical spectacle. Immerse yourself in an extraordinary tapestry of workshops, technical showdowns, and engaging events meticulously crafted by the university's diverse schools. Beyond honing professional prowess, we're dedicated to nurturing life-enriching qualities in our students. Brace yourself for pulse-pounding gaming duels that will elevate excitement and create an atmosphere of pure fun. The festival transcends boundaries with awe-inspiring technical exhibitions, a testament to contributions from diverse organizations. At VIT Chennai, we pledge an ambiance brimming with endless delight, ensuring you depart with hearts full of anticipation. Get ready to be captivated, for TechnoVIT '23 is where magic and innovation converge!
          </p>
          <br />
        </div>
        <div className="flex justify-center items-center text-center mt-4 mb-4">
          <Link target="_blank" href="https://chennai.vit.ac.in/about/leadership/"
            className="mt-6 mb-4 ml-2 rounded-[90px] border-2 border-purple-600 w-52
            h-16 sm:w-44 sm:h-14 md:w-48 md:h-16 lg:w-52 lg:h-16 flex justify-center 
            items-center text-[#C8B8EC] text-base font-medium cursor-pointer 
            bg-opacity-80 hover:bg-purple-500/10 hover:text-purple-200 transition-all duration-300"

          >
            Leaders Messages
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
