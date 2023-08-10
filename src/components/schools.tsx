"use client";
import bandvit from "@/assets/logos/bandvit.webp";
import connect from "@/assets/logos/connectivitieee.webp";
import diseno from "@/assets/logos/diseno.webp";
import glitz from "@/assets/logos/glitz.webp";
import lilacs from "@/assets/logos/lilacs.webp";
import qubit from "@/assets/logos/qubit.webp";
import srishti from "@/assets/logos/srishti.webp";
import taikunn from "@/assets/logos/taikuun.webp";
import vitness from "@/assets/logos/vitness.webp";
import vsplash from "@/assets/logos/vsplash.webp";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface ImageProps {
  image: StaticImageData;
  className?: string;
}

let ImageComponent = (props: ImageProps): ReactNode => {
  return (
    <Image
      className={`sm:max-w-[8em] sm:max-h-[8em] md:max-h-[8em] md:max-w-[8em] grayscale hover:grayscale-0 hover:scale-125 transition-all duration-300 cursor-pointer ${props.className}`}
      src={props.image}
      alt="Logo"
    />
  );
};

let Schools = (): JSX.Element => {
  return (
    <section className="py-32 sm:py-40">
      <section className="md:text-center sm:text-center mb-10 lg:px-32 sm:px-8 md:px-16 text-6xl font-monty bg-clip-text text-transparent bg-gradient-to-t from-stone-600 to-white uppercase">
        Schools
      </section>
      <section className="grid md:grid-cols-5 md:px-6 sm:grid-cols-1 lg:grid-cols-5 lg:px-32 items-center place-items-center place-content-center gap-4">
        <ImageComponent className="" image={qubit} />
        <ImageComponent className="" image={srishti} />
        <ImageComponent className="" image={glitz} />
        <ImageComponent className="" image={taikunn} />
        <ImageComponent className="" image={diseno} />
        <ImageComponent className="" image={bandvit} />
        <ImageComponent className="lg:h-48 lg:w-48" image={lilacs} />
        <ImageComponent className="" image={vsplash} />
        <ImageComponent className="" image={vitness} />
        <ImageComponent className="lg:h-48 lg:w-48" image={connect} />
      </section>
    </section>
  );
};

export default Schools;
