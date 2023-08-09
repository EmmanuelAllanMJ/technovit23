"use client";
import "@/app/swivel.css";
import bandvit from "@/assets/logos/bandvit.webp";
import connect from "@/assets/logos/connectivitieee.webp";
import diseno from "@/assets/logos/diseno.webp";
import lilacs from "@/assets/logos/lilacs.webp";
import qubit from "@/assets/logos/qubit.webp";
import srishti from "@/assets/logos/srishti.webp";
import taikunn from "@/assets/logos/taikuun.webp";
import glitz from "@/assets/logos/glitz.webp";
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
      className={`${props.className}`}
      src={props.image}
      alt="Logo"
    />
  );
};

let Schools = (): JSX.Element => {
  return (
    <div className="container hover:grayscale-0">
      <div id="carousel">
        <div>
          <ImageComponent image={qubit} className="" />
        </div>
        <div>
          <ImageComponent image={bandvit} />
        </div>
        <div>
          <ImageComponent image={lilacs} />
        </div>
        <div>
          <ImageComponent image={glitz} />
        </div>
        <div>
          <ImageComponent image={connect} />
        </div>
        <div>
          <ImageComponent image={diseno} />
        </div>
        <div>
          <ImageComponent image={srishti} />
        </div>
        <div>
          <ImageComponent image={taikunn} />
        </div>
        <div>
          <ImageComponent image={vitness} />
        </div>
        <div>
          <ImageComponent image={vsplash} />
        </div>
      </div>
    </div>
  );
};

export default Schools;
