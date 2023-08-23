import React from "react";
import Image from "next/image";
import TechnoLogo from "../../public/assets/technovit-logo.svg";

const About = () => {
  return (
    <>
      <div className="flex px-32 md:px-28 sm:px-16  flex-col justify-center mt-12 mb-16" id="about">
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


          <h2 className="z-100 font-monty bg-clip-text text-transparent bg-gradient-to-tl from-stone-600 to-white text-center text-7xl md:text-6xl sm:text-4xl uppercase">
            About TechnoVIT
          </h2>
        </div>
        <div className="grid place-items-center">
          <div className=" absolute right-1/3 shadow-purple-900 opacity-30 md:opacity:10 sm:opacity:5 w-300 h-200 shadow-[0_0_20em_20em] "></div>
          <p className="z-10 text-neutral-100/80 font-monty font-extralight text-center w-full leading-relaxed sm:tracking-widest md:text-justify lg:text-justify mt-6 lg:w-10/12 text-4xl md:text-3xl sm:text-xl pt-4">
            Introducing the 8<sup>th</sup> Edition of TechnoVIT, VIT Chennai's prestigious international-level technical festival. We are thrilled and honored to present TechnoVIT '23, a captivating technical extravaganza brimming with a diverse array of activities, including workshops and technical events organized by the university's various schools. Our primary aim is to foster professional skills and instill valuable qualities in our students. The event also boasts exhilarating gaming competitions that promise excitement and a lighthearted atmosphere. Furthermore, the festival features technical exhibitions showcasing contributions from different organizations. At VIT Chennai, we assure our audience an atmosphere filled with boundless joy, leaving them eager for more.
          </p>
          <br />
        </div>
        <div className="flex justify-center items-center text-center mt-4 mb-4">
          <a href="/about"
            target="_blank"
            className="mt-6 mb-4 ml-2 rounded-[90px] border-2 border-purple-600 w-52
            h-16 sm:w-44 sm:h-14 md:w-48 md:h-16 lg:w-52 lg:h-16 flex justify-center 
            items-center text-[#C8B8EC] text-base font-medium cursor-pointer 
            bg-opacity-80 hover:bg-purple-500/10 hover:text-purple-200 transition-all duration-300"

          >
            Delegates Message
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
