import React, { useState } from "react";
import { motion } from "framer-motion";

function MindfulMeditation() {
  const [currentImage, setCurrentImage] = useState(
    "https://ik.imagekit.io/d7t01fhx2/Ovum_Hospitals/Blogs/Pregnancy%20and%20the%20benefits%20of%20mindfulness%20meditation%20for%20emotional%20well-being-01.jpg?updatedAt=1693827698201" // Default image
  ); // Replace with your initial image URL
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track current image index

  const images = [
    {
      title: "Mindful Meditation Step 1",
      url: "https://ik.imagekit.io/d7t01fhx2/Ovum_Hospitals/Blogs/Pregnancy%20and%20the%20benefits%20of%20mindfulness%20meditation%20for%20emotional%20well-being-01.jpg?updatedAt=1693827698201", // Replace with actual image URL
      description:
        "Find a comfortable seated position. Use cushions for support if needed, and sit with your back straight. Allow your hands to rest on your knees or in your lap, palms facing up or down. Take a moment to notice your breath.",
    },
    {
      title: "Mindful Meditation Step 2",
      url: "https://www.nuskhakitchen.com/public/img/uploads/media/1701162716.jpg", // Replace with actual image URL
      description:
        "Close your eyes gently. Take a deep breath in through your nose, allowing your belly to expand. Hold for a moment, then exhale slowly through your mouth. Repeat this for a few cycles.",
    },
    {
      title: "Mindful Meditation Step 3",
      url: "https://media.istockphoto.com/id/1299850662/photo/pregnant-woman-in-lotus-pose-doing-meditation-or-breathing-exercises-for-healthy-pregnancy.jpg?s=612x612&w=0&k=20&c=gULBqbetVtFhCdWvkXt9kB-yVGiXafutDwZXPD-k01c=", // Replace with actual image URL
      description:
        "Bring your awareness to your body. Notice how it feels, especially your belly. Acknowledge any tension or discomfort, and breathe into those areas, allowing them to soften.",
    },
    {
      title: "Mindful Meditation Step 4",
      url: "https://images.agoramedia.com/wte3.0/gcms/pregnancy-and-meditation-2019-722x406.jpg", // Replace with actual image URL
      description:
        "Focus on your breathing. Inhale deeply, and as you exhale, imagine releasing any stress or anxiety. Visualize your breath flowing in and out like gentle waves.",
    },
    {
      title: "Mindful Meditation Step 5",
      url: "https://images.photocase.com/u/uypqthj6/4d6tr4gd/photocase4d6tr4gd2.jpg?1679488291", // Replace with actual image URL
      description:
        "If your mind begins to wander, gently bring your focus back to your breath. It's normal for thoughts to arise; acknowledge them without judgment and return to your breathing.",
    },
    {
      title: "Mindful Meditation Step 6",
      url: "https://images.photocase.com/e/eymz1mlo/3f7xwwtl/photocase3f7xwwtl2.jpg?1679425251", // Replace with actual image URL
      description:
        "After 5-10 minutes, slowly bring your awareness back to the room. Wiggle your fingers and toes, and when you feel ready, gently open your eyes. Take a moment before getting up, allowing yourself to transition back.",
    },
  ];

  const handleImageClick = (url, index) => {
    setCurrentImage(url);
    setCurrentImageIndex(index); // Update the current image index
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-start p-10 mt-10 bg-white"
      initial={{ opacity: 0, y: 20 }} // Initial state for the whole component
      animate={{ opacity: 1, y: 0 }} // Animation state
      exit={{ opacity: 0, y: -20 }} // Exit animation
      transition={{ duration: 0.5 }} // Duration for the animations
    >
      <div className="flex-1">
        {/* Image Display */}
        <img
          src={currentImage}
          alt={`Mindful Meditation ${currentImageIndex + 1}`}
          width="100%"
          height="400" // Set fixed height for the image
          className="object-cover border-none"
        />
        {/* Description Text */}
        <p className="mt-4 text-center text-lg text-gray-600">
          {images[currentImageIndex].description}
        </p>
      </div>

      {/* Button Container */}
      <div className="bg-[#FFF4F4] p-6 rounded-lg shadow-md ml-4 w-80 h-[400px]">
        {/* Currently Displaying Button */}
        <motion.button
          className="bg-[#FFF4F4] w-full py-2 rounded-none my-1 font-bold text-[#F38FB1] border border-[#F38FB1] text-center"
          whileHover={{ scale: 1.05 }} // Scale effect on hover
          whileTap={{ scale: 0.95 }} // Scale effect when tapped
        >
          Currently Displaying: {currentImageIndex + 1} / {images.length}{" "}
          {/* Display current image index */}
        </motion.button>

        {/* Image Selection Buttons */}
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => handleImageClick(image.url, index)}
            className="bg-[#FFF4F4] w-full py-2 rounded-none my-1 font-bold text-[#F38FB1] border border-[#F38FB1] text-center"
            whileHover={{ scale: 1.05 }} // Scale effect on hover
            whileTap={{ scale: 0.95 }} // Scale effect when tapped
            style={{ marginBottom: "0.5rem" }} // Add spacing between buttons
          >
            {image.title}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export default MindfulMeditation;
