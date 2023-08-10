"use client";
import React from "react";
import { motion } from "framer-motion";

const Cards = () => (
  <div className="relative overflow-hidden">
    <motion.div
      className="flex gap-2 p-2"
      initial={{ x: "0%" }}
      animate={{ x: "100%" }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <img
        className="w-full sm:w-56 h-86 md:w-80 h-100"
        src="/assets/Rectangle1.png"
        alt="Image-1"
      />
      <img
        className="w-full sm:w-56 h-86 md:w-80 h-100"
        src="/assets/Rectangle2.png"
        alt="Image-2"
      />
      <img
        className="w-full sm:w-56 h-86 md:w-80 h-100"
        src="/assets/Rectangle3.png"
        alt="Image-1"
      />
      <img
        className="w-full sm:w-56 h-86 md:w-80 h-100"
        src="/assets/Rectangle2.png"
        alt="Image-2"
      />
 
    </motion.div>
  </div>
);

export default Cards;
