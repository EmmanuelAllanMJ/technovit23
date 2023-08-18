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
      className={`sm:max-w-[8em] sm:max-h-[8em] md:max-h-[8em] md:max-w-[8em] grayscale-0 hover:grayscale-0 hover:scale-125 transition-all duration-300 cursor-pointer ${props.className}`}
      src={props.image}
      alt="Logo"
    />
  );
};

let Schools = (): JSX.Element => {
  return (
    <section className="py-32 sm:py-40 bg-white/20" id="#events">
      <section className="md:text-center sm:text-center mb-10 lg:px-32 sm:px-8 md:px-16 text-6xl font-monty bg-clip-text text-transparent bg-gradient-to-t from-stone-600 to-white uppercase ">
        Schools
      </section>
      <section className="grid md:grid-cols-4 md:px-6 sm:grid-cols-1 lg:grid-cols-4 lg:px-32 items-center place-items-center place-content-center gap-4">
        <ImageComponent image={qubit} />
        <ImageComponent image={srishti} />
        <ImageComponent image={glitz} />
        <ImageComponent image={taikunn} />
        <ImageComponent image={diseno} />
        <ImageComponent image={bandvit} />
        <ImageComponent image={vsplash} />
        <ImageComponent image={vitness} />
      </section>
      <section className="flex sm:flex-col sm:h-full sm:justify-center sm:items-center px-8 justify-center gap-16">
        <ImageComponent className="lg:h-52 lg:w-52" image={lilacs} />
        <ImageComponent className="lg:h-52 lg:w-52" image={connect} />
      </section>
    </section>
  );
};

export default Schools;
