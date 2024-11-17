import React, { useState } from "react";
import { motion } from "framer-motion";
import mantra1 from "../../assets/mantra1.jpg";
import mantra2 from "../../assets/mantra2.jpg";
import mantra3 from "../../assets/mantra3.jpg";
import mantra4 from "../../assets/mantra4.jpg";
import mantra5 from "../../assets/mantra5.jpg";

function MantraMeditation() {
  const [currentImage, setCurrentImage] = useState(mantra1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      title: "Step 1: Find a Calm Sitting Position",
      url: mantra1,
      description:
        "Sit in a quiet place, with a relaxed posture and closed eyes.",
    },
    {
      title: "Step 2: Place Hands on Belly",
      url: mantra2,
      description:
        "Place your hands on your belly, feeling warmth and connection.",
    },
    {
      title: "Step 3: Choose a Soothing Mantra",
      url: mantra3,
      description:
        "Select a calming mantra, like “I am calm” or “We are safe.”",
    },
    {
      title: "Step 4: Repeat Mantra with Each Breath",
      url: mantra4,
      description: "Silently repeat the mantra, breathing deeply and slowly.",
    },
    {
      title: "Step 5: Embrace the Stillness",
      url: mantra5,
      description:
        "After a few minutes, pause, embracing the calm and connection.",
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
          alt={`Mantra Meditation Step ${currentImageIndex + 1}`}
          width="800"
          height="800"
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

export default MantraMeditation;
