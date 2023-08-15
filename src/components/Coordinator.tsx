"use client";

import CoordinatorCardImage from "@/components/CoordinatorCards";
import { facultyImageUrl, studentImageUrl } from "../../public/data/data";

interface ICompProps {
  className?: string;
}

const CoordinatorComponent = (props: ICompProps) => {
  return (
    <section className={`${props.className} font-monty py-4`}>
      <section className="flex flex-col border lg:mx-32 md:mx-16 sm:mx-8 border-t-0 border-b-2 border-r-2 border-l-2 rounded-lg border-white">
        <h1 className="flex w-full justify-center bg-clip-text text-transparent bg-gradient-to-tl from-stone-600 to-white text-center mx-auto text-6xl uppercase my-16">
          Faculty Coordinators
        </h1>
        <section className="flex flex-wrap sm:flex-col items-center justify-center gap-12 w-full">
          {facultyImageUrl.map((item, i) => (
            <CoordinatorCardImage link={item.link} name={item.name} key={i} />
          ))}
        </section>
        <h1 className="flex w-full justify-center bg-clip-text text-transparent bg-gradient-to-tl from-stone-600 to-white text-center mx-auto text-6xl uppercase my-16">
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
