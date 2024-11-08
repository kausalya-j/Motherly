import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BooksImage from "../../assets/book.jpg"; // Replace with actual path for Books image
import StoriesImage from "../../assets/articles.jpg"; // Replace with actual path for Stories image
import BooksSection from "./Books"; // Import the BooksSection component

function ReadingSection() {
  const [showBooks, setShowBooks] = useState(false);

  const handleBooksClick = () => {
    setShowBooks(true);
  };

  // Animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
      },
    },
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


        {/* Title */}
        <h3 className="text-xl font-bold italic mb-6">Choose what you read today!</h3>

        {/* If books are not clicked, show options */}
        <AnimatePresence>
          {!showBooks && (
            <motion.div
              className="flex justify-center space-x-10 mt-20"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
            >
              {/* Books Section */}
              <motion.div
                className="flex flex-col items-center transition-transform duration-300 hover:scale-105" // Added hover effect to the whole card
              >
                <img className="h-64 w-64 object-cover rounded-md mb-3" src={BooksImage} alt="Books" />
                <button
                  className="bg-[#F38FB1] w-64 py-3 rounded-full my-3 font-bold text-white"
                  onClick={handleBooksClick}
                >
                  Books
                </button>
              </motion.div>

              {/* Stories Section */}
              <motion.div
                className="flex flex-col items-center transition-transform duration-300 hover:scale-105" // Added hover effect to the whole card
              >
                <img className="h-64 w-64 object-cover rounded-md mb-3" src={StoriesImage} alt="Stories" />
                <button className="bg-[#F38FB1] w-64 py-3 rounded-full my-3 font-bold text-white">
                  Stories
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show BooksSection if button is clicked */}
        <AnimatePresence>
          {showBooks && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
            >
              <BooksSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ReadingSection;
