import React, { useState } from "react";
import { motion } from "framer-motion";
import movement1 from "../../assets/movement1.jpg";
import movement3 from "../../assets/movement3.jpg";
import movement4 from "../../assets/movement4.jpg";
import movement5 from "../../assets/movement5.jpg";

function MovementMeditation() {
  const [currentImage, setCurrentImage] = useState(movement1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      title: "Step 1: Stand in a Serene Space",
      url: movement1,
      description:
        "Find a quiet, open area where you feel relaxed and grounded.",
    },
    {
      title: "Step 2: Set Your Intention",
      url: "https://img.freepik.com/premium-photo/close-up-young-pregnant-woman-holding-her-hands-her-belly-last-trimester-pregnancypregnancy-loving-concept_135735-998.jpg",
      description:
        "Take a deep breath, close your eyes, and think of a soothing intention, like “I am calm and connected.”",
    },
    {
      title: "Step 3: Place Hands on Belly",
      url: movement3,
      description:
        "Connect with your baby by resting your hands on your belly, feeling a sense of warmth and connection.",
    },
    {
      title: "Step 4: Begin Gentle Swaying",
      url: movement4,
      description:
        "Slowly sway from side to side, feeling stable and mindful of each movement.",
    },
    {
      title: "Step 5: Sync Movement with Breath",
      url: movement5,
      description:
        "Breathe deeply, matching each breath with your movement, staying present and serene.",
    },
  ];

  const handleImageClick = (url, index) => {
    setCurrentImage(url);
    setCurrentImageIndex(index);
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-start p-10 mt-10 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-1">
        <img
          src={currentImage}
          alt={`Mindful Meditation ${currentImageIndex + 1}`}
          width="800"
          height="00"
          className="object-cover border-none"
        />
        <p className="mt-4 text-center text-lg text-gray-600">
          {images[currentImageIndex].description}
        </p>
      </div>

      <div className="bg-[#FFF4F4] p-6 rounded-lg shadow-md ml-4 w-80 h-[400px]">
        <motion.button
          className="bg-[#FFF4F4] w-full py-2 rounded-none my-1 font-bold text-[#F38FB1] border border-[#F38FB1] text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Currently Displaying: {currentImageIndex + 1} / {images.length}
        </motion.button>

        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => handleImageClick(image.url, index)}
            className="bg-[#FFF4F4] w-full py-2 rounded-none my-1 font-bold text-[#F38FB1] border border-[#F38FB1] text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginBottom: "0.5rem" }}
          >
            {image.title}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export default MovementMeditation;
