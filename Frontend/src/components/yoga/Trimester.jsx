import React from "react";
import ExerciseImage from "../../assets/Yog.png"; // Replace with your actual image path

function Trimester({ handleTrimesterSelection }) {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col items-start justify-center w-1/2 p-10">
        <a
          href="/user" // Replace with the actual path to your Prof page
          className="bg-[#F38FB1] text-white py-2 px-4 rounded-full mb-4 transition-transform transform hover:scale-105"
        >
          Back
        </a>
        <h1 className="font-bold text-3xl mb-4">Trimester Selection</h1>
        <button
          className="bg-[#F38FB1] text-white py-3 px-10 rounded-full my-2 w-full transition-transform transform hover:scale-105"
          onClick={() => handleTrimesterSelection(1)} // First Trimester
        >
          First Trimester
        </button>
        <button
          className="bg-[#F38FB1] text-white py-3 px-10 rounded-full my-2 w-full transition-transform transform hover:scale-105"
          onClick={() => handleTrimesterSelection(2)} // Second Trimester
        >
          Second Trimester
        </button>
        <button
          className="bg-[#F38FB1] text-white py-3 px-10 rounded-full my-2 w-full transition-transform transform hover:scale-105"
          onClick={() => handleTrimesterSelection(3)} // Third Trimester
        >
          Third Trimester
        </button>
        <button
          className="bg-[#F38FB1] text-white py-3 px-10 rounded-full my-2 w-full transition-transform transform hover:scale-105"
          onClick={() => alert("Avoid Exercises")} // Avoid Exercises button
        >
          Avoid Exercises
        </button>
      </div>

      {/* Right Side Image */}
      <div className="w-4/5 flex items-center justify-start p-10">
        <img src={ExerciseImage} alt="Exercise" className="w-3/4 h-auto rounded-lg shadow-lg transition-transform transform hover:scale-110" />
      </div>
    </div>
  );
}

export default Trimester;
