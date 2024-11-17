import React from "react";
import { Link } from "react-router-dom";

function Stories() {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="w-3/4 flex flex-col items-center justify-center px-8 py-4">
        {/* Header */}

        {/* Stories Options */}
        <div className="grid grid-cols-2 gap-10">
          {/* Story Card 1 */}
          <Link
            to="https://www.gutenberg.org/cache/epub/17396/pg17396-images.html"
            className="flex flex-col items-center"
          >
            <img
              src="https://www.gutenberg.org/cache/epub/17396/images/cover.jpg"
              alt="The Secret Garden"
              className="h-40 w-40 object-cover rounded-md shadow-lg"
            />
            <button className="bg-[#F38FB1] w-full py-3 rounded-full mt-4 font-bold text-white">
              The Secret Garden
            </button>
          </Link>

          {/* Story Card 2 */}
          <Link
            to="https://www.gutenberg.org/cache/epub/68577/pg68577-images.html"
            className="flex flex-col items-center"
          >
            <img
              src="https://www.gutenberg.org/cache/epub/68577/pg68577.cover.medium.jpg"
              alt="Little Women"
              className="h-40 w-40 object-cover rounded-md shadow-lg"
            />
            <button className="bg-[#F38FB1] w-full py-3 rounded-full mt-4 font-bold text-white">
              The Mother
            </button>
          </Link>

          {/* Story Card 3 */}
          <Link
            to="https://www.gutenberg.org/cache/epub/17506/pg17506-images.html"
            className="flex flex-col items-center"
          >
            <img
              src="https://www.gutenberg.org/cache/epub/17506/images/image_01.jpg"
              alt="Anne of Green Gables"
              className="h-40 w-40 object-cover rounded-md shadow-lg"
            />
            <button className="bg-[#F38FB1] w-full py-3 rounded-full mt-4 font-bold text-white">
              A Little Mother to the Others
            </button>
          </Link>

          {/* Story Card 4 */}
          <Link
            to="https://www.gutenberg.org/cache/epub/30230/pg30230-images.html"
            className="flex flex-col items-center"
          >
            <img
              src="https://www.gutenberg.org/cache/epub/30230/images/i001.jpg"
              alt="Pride and Prejudice"
              className="h-40 w-40 object-cover rounded-md shadow-lg"
            />
            <button className="bg-[#F38FB1] w-full py-3 rounded-full mt-4 font-bold text-white">
              A Story of the Red Cross
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Stories;
