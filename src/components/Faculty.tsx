"use client";
import { aboutFacultyImageUrl } from "../../public/data/data";
import FacultyCardImage from "@/components/FacultyCard";

interface ICompProps {
  className?: string;
}

const FacultyComponent = (props: ICompProps) => {
  return (
    <section className={`${props.className} font-monty py-4`}>
      <section className="flex flex-col lg:mx-32 md:mx-16 sm:mx-8">
        <h1 className="flex w-full justify-center bg-clip-text text-transparent bg-gradient-to-tl from-stone-600 to-white text-center mx-auto text-6xl md:text-4xl sm:text-4xl uppercase my-16">
          About Faculty
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
  );
};

export default FacultyComponent;
