"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

const images = [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.webp",
  "8.webp",
  "9.webp",
  "10.webp",
  "11.webp",
  "12.webp",
];

const Gallery: React.FC = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState<{ width: number; height: number }>(
    { width: 0, height: 0 }
  );

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="overflow-hidden"> 
      <div ref={gallery} className={`gallery -mx-[300px] scale-50 lg:mx-0 md:scale-75 lg:scale-100 `}>
        <Column images={[images[0], images[5], images[10], images[9]]} y={y} />
        <Column images={[images[3], images[4], images[3], images[11]]} y={y2} />
        <Column images={[images[2], images[7], images[8], images[6]]} y={y3} />
        <Column images={[images[11], images[9], images[2], images[11]]} y={y4} />
      </div>
    </section>
  );
};

interface ColumnProps {
  images: string[];
  y: any;
}

const Column: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    <motion.div 
      className={`column relative h-full w-3/12 min-w-[250px]  flex flex-col gap-[2vw] scale-75`}
      style={{ y }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className={`h-full w-full relative rounded-[1vw]`}
        >
           <Image src={`/images/${src}`} alt='image' className="object-cover" fill />
        </div>
      ))}
    </motion.div>
  );
};

export default Gallery;
