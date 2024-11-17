import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MindfulMeditationImage from "../../assets/m1.jpg";
import MovementMeditationImage from "../../assets/m2.jpg";
import MantraMeditationImage from "../../assets/m3.jpg";
import MindfulMeditation from "./MindfulMeditation";
import MovementMeditation from "./MovementMeditation";
import MantraMeditation from "./MantraMeditation"; // Import the MantraMeditation component

function MeditationSection() {
  const [showMindfulMeditation, setShowMindfulMeditation] = useState(false);
  const [showMovementMeditation, setShowMovementMeditation] = useState(false);
  const [showMantraMeditation, setShowMantraMeditation] = useState(false); // State for MantraMeditation

  const handleMindfulMeditationClick = () => {
    setShowMindfulMeditation(true);
    setShowMovementMeditation(false);
    setShowMantraMeditation(false);
  };

  const handleMovementMeditationClick = () => {
    setShowMovementMeditation(true);
    setShowMindfulMeditation(false);
    setShowMantraMeditation(false);
  };

  const handleMantraMeditationClick = () => {
    setShowMantraMeditation(true);
    setShowMindfulMeditation(false);
    setShowMovementMeditation(false);
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col p-10 bg-white">
        <a
          href="/user"
          className="bg-[#F38FB1] text-white py-2 px-4 rounded-full mb-4 w-32 transition-transform transform hover:scale-105 text-center flex items-center justify-center"
        >
          Back
        </a>

        <AnimatePresence>
          {!showMindfulMeditation &&
            !showMovementMeditation &&
            !showMantraMeditation && (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
              >
                <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                  <img
                    className="h-40 w-40 object-cover rounded-md mb-3"
                    src={MindfulMeditationImage}
                    alt="Mindful Meditation"
                  />
                  <button
                    className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white"
                    onClick={handleMindfulMeditationClick}
                  >
                    Mindful Meditation
                  </button>
                </motion.div>

                <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                  <img
                    className="h-40 w-40 object-cover rounded-md mb-3"
                    src={MovementMeditationImage}
                    alt="Movement Meditation"
                  />
                  <button
                    className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white"
                    onClick={handleMovementMeditationClick}
                  >
                    Movement Meditation
                  </button>
                </motion.div>

                <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                  <img
                    className="h-40 w-40 object-cover rounded-md mb-3"
                    src={MantraMeditationImage}
                    alt="Mantra Meditation"
                  />
                  <button
                    className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white"
                    onClick={handleMantraMeditationClick}
                  >
                    Mantra Meditation
                  </button>
                </motion.div>
              </motion.div>
            )}
        </AnimatePresence>

        <AnimatePresence>
          {showMindfulMeditation && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
            >
              <MindfulMeditation />
            </motion.div>
          )}
          {showMovementMeditation && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
            >
              <MovementMeditation />
            </motion.div>
          )}
          {showMantraMeditation && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
            >
              <MantraMeditation />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MeditationSection;
