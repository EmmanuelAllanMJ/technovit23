import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const targetDate = new Date('2023-08-31T00:00:00').getTime(); // Set your target date here
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function calculateRemainingTime() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-white from-60% to-gray-700 text-transparent bg-clip-text">Get ready to be Engaged, Enthrilled, and Entertained in</h1>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-lg flex flex-col items-center space-y-4 bg-gradient-to-b from-white from-20% to-gray-800 text-transparent bg-clip-text"
      >
        
        <div className="flex lg:flex-row md:flex-col space-x-8">
          <div className="flex flex-col items-center">
            <span className="text-9xl font-bold">
            {remainingTime.days >= 10 ? remainingTime.days : ("0" + remainingTime.days.toString())}
            </span>
            <span className="text-3xl font-semibold bg-gradient-to-b from-white from-20% to-gray-800 text-transparent bg-clip-text">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-9xl font-bold">
              {remainingTime.hours >= 10 ? remainingTime.hours : ("0" + remainingTime.hours.toString())}
            </span>
            <span className="text-3xl font-semibold bg-gradient-to-b from-white from-20% to-gray-800 text-transparent bg-clip-text">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-9xl font-bold">
            {remainingTime.minutes >= 10 ? remainingTime.minutes : ("0" + remainingTime.minutes.toString())}
            </span>
            <span className="text-3xl font-semibold bg-gradient-to-b from-white from-20% to-gray-800 text-transparent bg-clip-text">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-9xl font-bold">
            {remainingTime.seconds >= 10 ? remainingTime.seconds : ("0" + remainingTime.seconds.toString())}
            </span>
            <span className="text-3xl font-semibold bg-gradient-to-b from-white from-20% to-gray-800 text-transparent bg-clip-text">Seconds</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown;
