import Image from "next/image";
import React from "react";
import QouteIcon from "../../public/assets/qoute.png"

export type CardProps = {
  name: string;
  link: string;
  designation: string;
  description: string;
  className?: string;
};



const FacultyCardImage = (props: CardProps): JSX.Element => {
  return (
    <div
      className={`${props.className} cursor-pointer hover:scale-105 transition-all duration-300 w-full h-full flex flex-col lg:flex-row gap-6 lg:gap-0 px-6 py-4 bg-black/30 hover:bg-white/10 border border-white/70 rounded-lg  justify-between items-start object-contain`}
    >
      <div className="w-full lg:w-1/2  ">
        <div className="py-6">

          <img
            src={props.link}
            alt={props.name}
            className="rounded-lg h-80 w-80 md:h-64 md:w-64 hover:grayscale hover:brightness transition-all duration-500 ease-in-out"
          />
        </div>

        <div className="flex items-start justify-center flex-col gap-4 max-w-md">

          <h1 className="text-white font-semibold text-left max-w-xs text-2xl md:text-xl sm:text-xl">
            {props.name}
          </h1>
          <h3 className="text-white/70 text-center text-2xl md:text-lg sm:text-lg">
            {props.designation}
          </h3>
          {/* <h6 className="text-white text-center text-2xl md:text-lg sm:text-lg">
            {props.description}
          </h6> */}
        </div>
      </div>

      <div className="relative text-white gap-4 p-2 lg:p-10 w-full h-full flex items-start italic text-lg lg:text-xl font-extralight justify-center flex-col">
        <div className="w-full h-full leading-loose">
        <div className="w-10 lg:w-20 flex items-center justify-center h-full ">
          <Image src={QouteIcon} alt=" " className="w-full" />
        </div>
          {props.description}
          {props.description}
          {props.description}
        <div className="rotate-180 w-10 lg:w-20 flex items-center ml-auto justify-center top-52  lg:top-48 right-0 h-full ">
          <Image src={QouteIcon} alt=" " className="w-full" />
        </div>
        </div>

      </div>

    </div>
  );
};
export default FacultyCardImage;
