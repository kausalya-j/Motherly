import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MindfulMeditationImage from "../../assets/m1.jpg"; // Replace with actual path for Mindful Meditation image
import MovementMeditationImage from "../../assets/m2.jpg"; // Replace with actual path for Movement Meditation image
import MantraMeditationImage from "../../assets/m3.jpg"; // Replace with actual path for Mantra Meditation image
import BodyCenteredMeditationImage from "../../assets/m4.jpg"; // Replace with actual path for Body-Centered Meditation image
import ContemplationMeditationImage from "../../assets/m5.jpg"; // Replace with actual path for Contemplation Meditation image
import MindfulMeditation from "./MindfulMeditation"; // Import the MindfulMeditation component

function MeditationSection() {
  const [showMindfulMeditation, setShowMindfulMeditation] = useState(false);

  const handleMindfulMeditationClick = () => {
    setShowMindfulMeditation(true);
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col p-10 bg-white">
        {/* Back to User Page Button */}
        <a
          href="/user" // Replace with the actual path to the User page
          className="bg-[#F38FB1] text-white py-2 px-4 rounded-full mb-4 w-32 transition-transform transform hover:scale-105 text-center flex items-center justify-center"
        >
          Back
        </a>

        <AnimatePresence>
          {!showMindfulMeditation && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4" // Adjusted margin-top to mt-4
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
            >
              {/* Mindful Meditation Section */}
              <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                <img className="h-40 w-40 object-cover rounded-md mb-3" src={MindfulMeditationImage} alt="Mindful Meditation" />
                <button
                  className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white"
                  onClick={handleMindfulMeditationClick}
                >
                  Mindful Meditation
                </button>
              </motion.div>

              {/* Movement Meditation Section */}
              <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                <img className="h-40 w-40 object-cover rounded-md mb-3" src={MovementMeditationImage} alt="Movement Meditation" />
                <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
                  Movement Meditation
                </button>
              </motion.div>

              {/* Mantra Meditation Section */}
              <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                <img className="h-40 w-40 object-cover rounded-md mb-3" src={MantraMeditationImage} alt="Mantra Meditation" />
                <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
                  Mantra Meditation
                </button>
              </motion.div>

              {/* Body-Centered Meditation Section */}
              <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                <img className="h-40 w-40 object-cover rounded-md mb-3" src={BodyCenteredMeditationImage} alt="Body-Centered Meditation" />
                <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
                  Body-Centered Meditation
                </button>
              </motion.div>

              {/* Contemplation Meditation Section */}
              <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                <img className="h-40 w-40 object-cover rounded-md mb-3" src={ContemplationMeditationImage} alt="Contemplation Meditation" />
                <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
                  Contemplation Meditation
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show MindfulMeditation if button is clicked */}
        <AnimatePresence>
          {showMindfulMeditation && (
            <motion.div initial="hidden" animate="visible" exit="exit" variants={variants}>
              <MindfulMeditation />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MeditationSection;
