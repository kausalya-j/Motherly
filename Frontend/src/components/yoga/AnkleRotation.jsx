import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function AnkleRotation() {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    setIsActive(true);
    setTimerId(
      setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerId);
            setIsActive(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000)
    );
  };

  const pauseTimer = () => {
    setIsActive(false);
    clearInterval(timerId);
  };

  const resetTimer = () => {
    setIsActive(false);
    clearInterval(timerId);
    setTimeLeft(60); // Reset to 60 seconds
  };

  useEffect(() => {
    return () => clearInterval(timerId); // Clean up on component unmount
  }, [timerId]);

  return (
    <motion.div className="flex flex-col items-start px-8 py-4">
      {/* <a
        href="/poses" 
        className="bg-[#F38FB1] text-white py-2 px-4 rounded-full mb-6 transition-transform transform hover:scale-105"
      >
        Back
      </a> */}
      <div className="flex flex-row w-full mb-8 mt-10">
        <div className="w-4/5 pr-4">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/DYp_XvUqZJ0" // Correct YouTube embed URL for Ankle Rotation
            title="Ankle Rotation Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-1/4 pl-4">
          <h2 className="font-bold text-2xl mb-2">Ankle Rotation Instructions</h2>
          <p>
            1. Sit on the floor with your legs extended in front of you.
            <br />
            2. Gently rotate your right ankle clockwise in slow, controlled circles.
            <br />
            3. After 10 rotations, switch directions and rotate counterclockwise.
            <br />
            4. Repeat the same with your left ankle.
            <br />
            5. Continue for 30 seconds to a minute, alternating between both ankles.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-start space-x-4 mt-0.5"> {/* Reduced margin-top to push buttons up */}
        {!isActive ? (
          <button
            className={`bg-[#F38FB1] text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105 ${
              timeLeft <= 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={startTimer}
            disabled={timeLeft <= 0}
          >
            Start
          </button>
        ) : (
          <button
            className="bg-[#F38FB1] text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105"
            onClick={pauseTimer}
          >
            Pause
          </button>
        )}
        <button
          className="bg-[#F38FB1] text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
      <div className="mt-4">
        <span className="text-xl font-bold">{isActive ? `Time Left: ${timeLeft}s` : `Paused: ${timeLeft}s`}</span>
      </div>
    </motion.div>
  );
}

export default AnkleRotation;
