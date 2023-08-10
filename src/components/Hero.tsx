"use client";
import { motion } from "framer-motion";
import { useRef,useEffect,useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Text3d from '../components/Text3d';
const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const plane = useRef(null);
  const maxRotate = 45;

  const manageMouseMove = (e:any) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2; 
    const rotateY = (maxRotate * y - maxRotate / 2) * - 1;
    plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
  }

  const buttonVariants = {
    moving: { y: -10 },
    stopped: { y: 0 },
  };
  return (
    <div>
      <div className="w-full sm:h-50">
        <img
          src="/assets/background.png"
          className="h-screen w-screen object-cover blur-1xl"
          alt="Background"
        />

        <div className="absolute top-16 left-16 sm:left-0 sm:top-8 px-4">
          <img
            src="/assets/vitlogo.png"
            alt="Left Logo"
            className="w-full h-20 lg:h-40 "
          />
        </div>
        <div className="absolute top-16 right-20 sm:right-0 sm:top-8 px-4">
          <img
            src="/assets/technovitlogo.png"
            alt="Right Logo"
            className="w-full h-20 lg:h-40"
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center mt-60">
          <h1 className="text-9xl sm:text-4xl md:text-7xl font-monty bg-clip-text text-slate-200 tracking-widest">
          <div onMouseMove={(e) => {manageMouseMove(e)}}>
            <div ref={plane}>
              <Text3d primary={"T E C H N O V I T"} secondary={"T E C H N O V I T"}/>
            </div>
          </div>  
            <span className="text-6xl sm:text-xl md:text-5xl">'23</span>
          </h1>

          <div className="text-white text-2xl sm:text-sm font-monty italic capitalize text-center mt-6 sm:text-left">
            light of future it's AI
          </div>
          <motion.button
            className="w-40 h-16 sm:w-23 rounded-full p-2 border border-white mt-20 mb-10 flex items-center justify-center"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            variants={buttonVariants}
            initial="moving"
            animate={isHovered ? "stopped" : "moving"}
            whileHover="stopped"
          >
            <div className="text-white flex gap-2 font-normal capitalize">
              <p>Register Now</p>
              <p>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <BsArrowRight size={20} />
                </motion.span>
              </p>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
