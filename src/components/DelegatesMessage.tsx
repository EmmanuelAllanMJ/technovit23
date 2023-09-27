"use client";
import { aboutFacultyImageUrl } from "../../public/data/data";
import FacultyCardImage from "@/components/FacultyCard";

interface ICompProps {
  className?: string;
}

const FacultyComponent = (props: ICompProps) => {
  return (
    <>
      <div className="absolute top-16 left-16 sm:left-0 sm:top-8 px-4">
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
      <section className={`${props.className} font-monty pt-20 pb-60 h-full`}>
        <section className="flex flex-col lg:mx-32 md:mx-16 sm:mx-8">
          <h1 className="flex w-full tracking-widest justify-center bg-clip-text text-transparent bg-gradient-to-tl from-stone-600 to-white text-center mx-auto text-6xl md:text-4xl sm:text-4xl uppercase my-16">
            Delegates Message
          </h1>
          <section className="flex flex-wrap sm:flex-col items-center justify-center gap-12 w-full">
            {aboutFacultyImageUrl.map((item, i) => (
              <FacultyCardImage
                link={item.link}
                name={item.name}
                designation={item.designation}
                description={item.description}
                key={i}
              />
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default FacultyComponent;
