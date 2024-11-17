//import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for navigation
import Sidebar from "../components/sidebar"; // Import Sidebar component
import Med from "../assets/Med.png";
import Yoga from "../assets/Yog.png";
import Read from "../assets/Read.png";
import Food from "../assets/Food.png";
import Journal from "../assets/Jour.png";
import Music from "../assets/Mus.png";

function Profile() {
  return (
    <div className="flex">
      <Sidebar /> {/* Include the Sidebar here */}
      <div className="flex-1 flex flex-col px-8 py-4">
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
              />
              <Link to="/user/meditation">
                {" "}
                {/* Use Link for navigation */}
                <motion.button
                  className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 text-white font-bold justify-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  Meditation
                </motion.button>
              </Link>
            </div>
            <div className="flex-1 flex-col justify-center items-center">
              <motion.img
                className="w-2/3 bg-[#FFF4F4] p-4"
                src={Yoga}
                alt="Yoga"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              />
              <Link to="/user/yoga">
                {" "}
                {/* Use Link for navigation */}
                <motion.button
                  className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 text-white font-bold justify-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  Yoga
                </motion.button>
              </Link>
            </div>
            <div className="flex-1 flex-col justify-center items-center">
              <motion.img
                className="w-2/3 bg-[#FFF4F4] p-4"
                src={Read}
                alt="Reading Section"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              />
              <Link to="/user/reading">
                {" "}
                {/* Use Link for navigation */}
                <motion.button
                  className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 text-white font-bold justify-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  Reading Section
                </motion.button>
              </Link>
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
              <Link to="/user/food">
                {" "}
                <motion.button
                  className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 text-white font-bold justify-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  Food
                </motion.button>
              </Link>
            </div>
            <div className="flex-1 flex-col justify-center items-center">
              <motion.img
                className="w-2/3 bg-[#FFF4F4] p-4"
                src={Journal}
                alt="Journal"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              />
              <Link to="/user/journal">
                {" "}
                {/* Use Link for navigation */}
                <motion.button
                  className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 text-white font-bold justify-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  Journal
                </motion.button>
              </Link>
            </div>
            <div className="flex-1 flex-col justify-center items-center">
              <motion.img
                className="w-2/3 bg-[#FFF4F4] p-4"
                src={Music}
                alt="Music"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              />
              <Link to="/user/music">
                {" "}
                <motion.button
                  className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 text-white font-bold justify-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  Music
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
