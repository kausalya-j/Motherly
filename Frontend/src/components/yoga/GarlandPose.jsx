import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function GarlandPose() {
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
      <div className="flex flex-row w-full mb-8 mt-2">
        <div className="w-4/5 pr-4">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/lZYZK2W-UqY" // Correct YouTube embed URL
            title="Garland Pose Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-1/4 pl-4">
          <h2 className="font-bold text-2xl mb-2">Garland Pose Instructions</h2>
          <p>
            1. Start in a standing position with your feet wider than hip-width apart.
            <br />
            2. Bend your knees and lower your body into a squat, keeping your heels on the floor.
            <br />
            3. Bring your palms together at your chest and use your elbows to gently press your knees apart.
            <br />
            4. Hold this pose for 30 seconds to a minute, breathing deeply.
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
        <span className="text-xl font-bold">{isActive ? `Time Left: ${timeLeft}s` : `Paused: ${timeLeft}s`}</span>
      </div>
    </motion.div>
  );
}

export default GarlandPose;
