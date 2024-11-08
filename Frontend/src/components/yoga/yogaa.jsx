import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Trimester from './Trimester'; // Make sure the path is correct
import Poses from './poses'; // Import the Poses component
import ChildPose from './ChildPose'; // Import the ChildPose component

function Yogaa() {
  const [trimester, setTrimester] = useState(null);
  const [showChildPose, setShowChildPose] = useState(false); // State for showing Child Pose

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  const handleTrimesterSelection = (selectedTrimester) => {
    setTrimester(selectedTrimester); // Set selected trimester
    setShowChildPose(false); // Hide Child Pose if showing
  };

  return (
    <div>
      <AnimatePresence>
        {showChildPose ? (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <ChildPose />
          </motion.div>
        ) : trimester ? (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <Poses goBackToTrimester={() => setTrimester(null)} setShowChildPose={setShowChildPose} />
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <Trimester handleTrimesterSelection={handleTrimesterSelection} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Yogaa;
