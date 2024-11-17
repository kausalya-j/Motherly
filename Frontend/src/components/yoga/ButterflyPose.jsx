import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import butterfly from "../../assets/butterfly.jpg";

function ButterflyPose() {
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
    setTimeLeft(60);
  };

  useEffect(() => {
    return () => clearInterval(timerId);
  }, [timerId]);

  return (
    <motion.div className="flex flex-col items-start px-8 py-4">
      <div className="flex flex-row w-full mb-2 mt-2">
        <div className="w-4/5 pr-4">
          <img
            src={butterfly}
            alt="Butterfly Pose Tutorial"
            width="100%"
            height="315"
          />
        </div>
        <div className="w-1/4 pl-4">
          <h2 className="font-bold text-2xl mb-2">
            Butterfly Pose Instructions
          </h2>
          <p>
            1. Sit on the floor with your spine straight and legs extended in
            front of you.
            <br />
            2. Bend your knees and bring the soles of your feet together.
            <br />
            3. Hold your feet with your hands and try to bring your heels closer
            to your pelvis.
            <br />
            4. Gently flap your knees up and down like butterfly wings.
            <br />
            5. Hold the pose for 30 seconds to a minute while breathing deeply.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-start space-x-4 mt-1">
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
        <span className="text-xl font-bold">
          {isActive ? `Time Left: ${timeLeft}s` : `Paused: ${timeLeft}s`}
        </span>
      </div>
    </motion.div>
  );
}

export default ButterflyPose;
