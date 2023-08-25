"use client";

import CoordinatorCardImage from "@/components/CoordinatorCards";
import { facultyImageUrl, studentImageUrl } from "../../public/data/data";

interface ICompProps {
  className?: string;
}

const CoordinatorComponent = (props: ICompProps) => {
  return (
    <section className={`${props.className} font-monty py-4`}>
      <section className="flex flex-col lg:mx-32 md:mx-16 sm:mx-8">
        <h1 className="flex w-full justify-center bg-clip-text text-transparent bg-gradient-to-tl from-stone-600 to-white text-center mx-auto text-6xl md:text-4xl sm:text-4xl my-16">
          Faculty Coordinators
        </h1>
        <section className="flex flex-wrap sm:flex-col items-center justify-center gap-12 w-full">
          {facultyImageUrl.map((item, i) => (
            <CoordinatorCardImage link={item.link} name={item.name} key={i} designation={item.designation}/>
          ))}
        </section>
        <h1 className="flex w-full justify-center bg-clip-text text-transparent bg-gradient-to-tl from-stone-600 to-white text-center mx-auto text-6xl md:text-4xl sm:text-4xl my-16">
          Student Coordinators
        </h1>
        <section className="flex flex-wrap sm:flex-col items-center justify-center gap-12 w-full">
          {studentImageUrl.map((item, i) => (
            <CoordinatorCardImage link={item.link} name={item.name} key={i} />
          ))}
        </section>
      </section>
    </section>
  );
};

export default CoordinatorComponent;
