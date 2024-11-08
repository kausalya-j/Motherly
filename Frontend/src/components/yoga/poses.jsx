import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import y1 from "../../assets/yog1.png"; // Correct path to assets
import y2 from "../../assets/yog2.png";
import y3 from "../../assets/yog3.png";
import y4 from "../../assets/yog4.png";
import y5 from "../../assets/yog5.png";
import y6 from "../../assets/yog6.png";
import ChildPose from "./ChildPose"; // Import the ChildPose component
import BridgePose from "./BridgePose"; // Import the BridgePose component
import GarlandPose from "./GarlandPose"; // Import the GarlandPose component
import ButterflyPose from "./ButterflyPose"; // Import the ButterflyPose component
import AnkleRotation from "./AnkleRotation"; // Import the AnkleRotation component

function Poses({ goBackToTrimester }) {
  const [activePose, setActivePose] = useState(null); // State to control which pose to display

  // Define motion variants for animations
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  // Function to handle going back to pose selection
  const handleBackToPoses = () => {
    setActivePose(null); // Reset to null to go back to pose list
  };

  return (
    <motion.div
      className="flex flex-col px-8 py-4"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <div className="flex flex-rows mb-4">
        <div className="flex-1 font-bold text-3xl">Yoga</div>
        <button
          className="flex-end pr-48 font-bold text-3xl hover:text-[#F38FB1] transition-colors duration-300"
          onClick={goBackToTrimester}
        >
          Back
        </button>
      </div>

      {/* Display the active pose or the pose selection based on state */}
      {activePose === "ChildPose" && <ChildPose goBackToPoses={handleBackToPoses} />}
      {activePose === "BridgePose" && <BridgePose goBackToPoses={handleBackToPoses} />}
      {activePose === "GarlandPose" && <GarlandPose goBackToPoses={handleBackToPoses} />}
      {activePose === "ButterflyPose" && <ButterflyPose goBackToPoses={handleBackToPoses} />}
      {activePose === "AnkleRotation" && <AnkleRotation goBackToPoses={handleBackToPoses} />}

      {/* If no pose is active, show the pose list */}
      {!activePose && (
        <div className="flex flex-col py-2">
          <div className="flex-1 flex flex-row">
            {[
              { img: y1, alt: "Child Pose", onClick: () => setActivePose("ChildPose") },
              { img: y2, alt: "Bridge Pose", onClick: () => setActivePose("BridgePose") },
              { img: y3, alt: "Garland Pose", onClick: () => setActivePose("GarlandPose") },
            ].map(({ img, alt, onClick }, index) => (
              <motion.div key={index} className="flex-1 flex-col justify-center items-center">
                <motion.img
                  className="w-2/3 bg-[#FFF4F4] p-4 transition-transform duration-300 transform hover:scale-105"
                  src={img}
                  alt={alt}
                />
                <button
                  className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 text-white  justify-center transition-transform duration-300 transform hover:scale-105 hover:bg-[#F55B7A]"
                  onClick={onClick}
                >
                  {alt}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="flex-1 flex flex-row py-10">
            {[
              { img: y4, alt: "Butterfly Pose", onClick: () => setActivePose("ButterflyPose") },
              { img: y5, alt: "Ankle Rotation", onClick: () => setActivePose("AnkleRotation") },
              { img: y6, alt: "More", onClick: () => alert("More") }, // You can add more poses here
            ].map(({ img, alt, onClick }, index) => (
              <motion.div key={index} className="flex-1 flex-col justify-center items-center">
                <motion.img
                  className="w-2/3 bg-[#FFF4F4] p-4 transition-transform duration-300 transform hover:scale-105"
                  src={img}
                  alt={alt}
                />
                <button
                  className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 text-white justify-center transition-transform duration-300 transform hover:scale-105 hover:bg-[#F55B7A]"
                  onClick={onClick}
                >
                  {alt}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Poses;
