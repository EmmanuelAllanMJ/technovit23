"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./CoordinatorCards";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const cardVariants = {
  enter: (direction:number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction:number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

function Carousel() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const allCards = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const direction = width <= 350 ? 1 : width <= 640 ? 2 : 3;

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardIndices = allCards
    .slice(currentIndex, currentIndex + direction)
    .map((_, index) => (currentIndex + index) % allCards.length);

  const slideLeft = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - direction + allCards.length) % allCards.length
    );
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + direction) % allCards.length);
  };

  return (
    <div className="flex flex-col justify-evenly border w-4/5 h-screen rounded-3xl mx-auto border-stone-500 relative bg-violet-950/5 items-center overflow-hidden">
      <div className="flex w-full">
        <h1 className="text-white mx-auto text-4xl">Website Design</h1>
      </div>
      <div className="flex items-center justify-center gap-2">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="flex"
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: "tween",
                ease: [0.43, 0.13, 0.23, 0.96],
                duration: 0.5,
              },
              opacity: { duration: 0.2 },
            }}
          >
            {cardIndices.map((cardIndex) => (
              <motion.div
                key={cardIndex}
                className="transform scale-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Card id={cardIndex} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute left-0 flex items-center justify-center text-4xl rounded-full w-14 h-14 bg-gradient-to-t from-purple-300 to-purple-800 mt-14">
        <button onClick={slideLeft} className="text-white">
          <FiChevronLeft />
        </button>
      </div>
      <div className="absolute right-0 flex items-center justify-center text-4xl rounded-full w-14 h-14 bg-gradient-to-t from-purple-300 to-purple-800 mt-14">
        <button onClick={slideRight} className="text-white">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Carousel;