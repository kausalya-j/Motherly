import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import alarmSound from "../../assets/alarm.mp3"; // Adjust the path to your alarm sound

function ChildPose() {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerId, setTimerId] = useState(null); // To store the interval ID
  const audioRef = useRef(new Audio(alarmSound)); // Create a ref for the audio

  const playAlarm = () => {
    audioRef.current.play();
    setTimeout(() => {
      audioRef.current.pause(); // Stop the sound after 3 seconds
      audioRef.current.currentTime = 0; // Reset audio to the start
    }, 3000); // Adjust the timeout as needed (3 seconds)
  };

  const startTimer = () => {
    setIsActive(true);
    setTimerId(setInterval(() => {
      setTimeLeft((prevTime) => {
        // Play alarm at 30 seconds and 60 seconds
        if (prevTime === 31) { // Play when it reaches 30 seconds
          playAlarm();
        } else if (prevTime === 2) { // Play when it reaches 60 seconds
          playAlarm();
        }

        if (prevTime <= 1) {
          clearInterval(timerId);
          setIsActive(false);
          return 0;
        }

        return prevTime - 1;
      });
    }, 1000));
  };

  const pauseTimer = () => {
    setIsActive(false);
    clearInterval(timerId);
  };

  const resumeTimer = () => {
    if (!isActive && timeLeft > 0) {
      setIsActive(true);
      setTimerId(setInterval(() => {
        setTimeLeft((prevTime) => {
          // Play alarm at 30 seconds and 60 seconds
          if (prevTime === 31) { // Play when it reaches 30 seconds
            playAlarm();
          } else if (prevTime === 1) { // Play when it reaches 60 seconds
            playAlarm();
          }

          if (prevTime <= 1) {
            clearInterval(timerId);
            setIsActive(false);
            return 0;
          }

          return prevTime - 1;
        });
      }, 1000));
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    clearInterval(timerId);
    setTimeLeft(60); // Reset to 60 seconds
    audioRef.current.pause(); // Stop the sound
    audioRef.current.currentTime = 0; // Reset the audio to start
  };

  useEffect(() => {
    return () => clearInterval(timerId); // Clean up on component unmount
  }, [timerId]);

  return (
    <motion.div className="flex flex-col items-start px-8 py-4">
      <div className="flex flex-row w-full mb-8 mt-20">
        <div className="w-4/5 pr-4">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/ZkexBo_0klw" // Correct format for embedding
            title="Child Pose Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-1/4 pl-4">
          <h2 className="font-bold text-2xl mb-2">Child Pose Instructions</h2>
          <p>
            1. Start by kneeling on the floor.  
            <br />
            2. Sit back on your heels and stretch your arms forward.
            <br />
            3. Relax your forehead on the ground and breathe deeply.
            <br />
            4. Hold the pose for 30 seconds to a minute.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-start space-x-4 mt-4">
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
        {isActive && (
          <button
            className="bg-[#F38FB1] text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105"
            onClick={resumeTimer}
          >
            Resume
          </button>
        )}
      </div>
      <div className="mt-4">
        <span className="text-xl font-bold">
          {isActive ? `Time Left: ${timeLeft}s` : `Paused: ${timeLeft}s`}
        </span>
      </div>
    </motion.div>
  );
}

export default ChildPose;
