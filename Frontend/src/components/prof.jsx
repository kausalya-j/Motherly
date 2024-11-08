import React, { useState } from "react";
import { motion } from "framer-motion";
import Med from "../assets/Med.png";
import Yoga from "../assets/Yog.png";
import Read from "../assets/Read.png";
import Food from "../assets/Food.png";
import Journal from "../assets/Jour.png";
import Music from "../assets/Mus.png";
import ReadingSection from "./reading/ReadingSection";
import JournalMain from "./journal/JournalMain"; // Import JournalMain
import MeditationSection from "./meditation/MeditationSection"; // Import MeditationSection
import YogaSection from "./yoga/yogaa"; // Import your Yoga section

function Prof() {
  const [currentSection, setCurrentSection] = useState(""); // Use a single state for current section

  const renderSection = () => {
    switch (currentSection) {
      case "reading":
        return <ReadingSection />;
      case "journal":
        return <JournalMain />;
      case "meditation":
        return <MeditationSection />;
      case "yoga": // New case for Yoga section
        return <YogaSection />;
      default:
        return (
          <div className="flex flex-col px-8 py-4">
            <div className="font-bold text-3xl">Activities</div>
            <div className="flex flex-col py-2">
              <div className="flex-1 flex flex-row">
                <div className="flex-1 flex-col justify-center items-center">
                  <motion.img
                    className="w-2/3 bg-[#FFF4F4] p-4"
                    src={Med}
                    alt="Meditation"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setCurrentSection("meditation")} // Set the current section to meditation
                  />
                  <motion.button
                    className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 text-white font-bold justify-center" // Updated class to include text-white and font-bold
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setCurrentSection("meditation")}
                  >
                    Meditation
                  </motion.button>
                </div>
                <div className="flex-1 flex-col justify-center items-center">
                  <motion.img
                    className="w-2/3 bg-[#FFF4F4] p-4"
                    src={Yoga}
                    alt="Yoga"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setCurrentSection("yoga")} // Set the current section to yoga
                  />
                  <motion.button
                    className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 text-white font-bold justify-center" // Updated class to include text-white and font-bold
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setCurrentSection("yoga")}
                  >
                    Yoga
                  </motion.button>
                </div>
                <div className="flex-1 flex-col justify-center items-center">
                  <motion.img
                    className="w-2/3 bg-[#FFF4F4] p-4"
                    src={Read}
                    alt="Reading Section"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setCurrentSection("reading")} // Set the current section to reading
                  />
                  <motion.button
                    className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 text-white font-bold justify-center" // Updated class to include text-white and font-bold
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setCurrentSection("reading")}
                  >
                    Reading Section
                  </motion.button>
                </div>
              </div>
              <div className="flex-1 flex flex-row py-10">
                <div className="flex-1 flex-col justify-center items-center">
                  <motion.img
                    className="w-2/3 bg-[#FFF4F4] p-4"
                    src={Food}
                    alt="Food"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.button
                    className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 text-white font-bold justify-center" // Updated class to include text-white and font-bold
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Food
                  </motion.button>
                </div>
                <div className="flex-1 flex-col justify-center items-center">
                  <motion.img
                    className="w-2/3 bg-[#FFF4F4] p-4"
                    src={Journal}
                    alt="Journal"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setCurrentSection("journal")} // Set the current section to journal
                  />
                  <motion.button
                    className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 text-white font-bold justify-center" // Updated class to include text-white and font-bold
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setCurrentSection("journal")}
                  >
                    Journal
                  </motion.button>
                </div>
                <div className="flex-1 flex-col justify-center items-center">
                  <motion.img
                    className="w-2/3 bg-[#FFF4F4] p-4"
                    src={Music}
                    alt="Music"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.button
                    className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 text-white font-bold justify-center" // Updated class to include text-white and font-bold
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Music
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        );
      }
    };

  return renderSection(); // Render the current section
}

export default Prof;