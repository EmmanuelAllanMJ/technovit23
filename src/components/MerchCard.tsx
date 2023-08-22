import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

interface MerchCardProps {
  index: number;
  merchName: string;
  merchImage: string;
  merchCategory: string;
  merchSize: string;
  merchPrice: number;
}

const MerchCard: React.FC<MerchCardProps> = ({
  index,
  merchName,
  merchImage,
  merchCategory,
  merchSize,
  merchPrice,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.5,
            duration: 0.75,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#110C2A] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[200px]">
          <img
            src={merchImage}
            alt="project_image"
            className="w-full h-full rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[32px]">{merchName}</h3>
          <p className="mt-2 text-[#aaa6c3] text-[16px]">{merchSize}</p>
          <p className="mt-2 text-[#aaa6c3] text-[16px]">{merchCategory}</p>
          <p className="mt-2 text-[#aaa6c3] text-[16px]">₹ {merchPrice}</p>
        </div>
        <button
          type="submit"
          className="mt-6 mb-4 ml-2 rounded-[90px] border-2 border-purple-600 w-44
              h-10 sm:w-44 sm:h-10 md:w-40 md:h-10 lg:w-52 lg:h-12 flex justify-center 
              items-center text-[#C8B8EC] text-base font-medium cursor-pointer 
              bg-opacity-80 hover:bg-purple-500/10 hover:text-purple-200 transition-all duration-300"
        >
          <div className="flex flex-row text-sm">
            Buy Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              fill="none"
              className="ml-5 sm:ml-2 w-5 h-5"
            >
              <path
                d="M21.1743 22.8881L29.0625 14.9999L21.1743 7.11182L19.8485 8.43768L25.4734 14.0625L0.982265 14.0625V15.9375L25.4732 15.9375L19.8485 21.5622L21.1743 22.8881Z"
                fill="#C8B8EC"
              />
            </svg>
          </div>
        </button>
      </Tilt>
    </motion.div>
  );
};

export default MerchCard;
