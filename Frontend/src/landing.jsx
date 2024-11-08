import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import landingPic from "../assets/Back_Top.svg";
import landingBottom from "../assets/Back_Bottom.svg";
import Navbar from "../components/navbar";
import Mom from "../assets/Mom.png";
import Pose from "../assets/Pose.png";
import Profile from "../assets/profile.png";
import Therapy from "../assets/ther.png";
import Activity from "../assets/ACT.png";
import Thoughts from "../assets/THOU.png";

function Landing() {
  return (
    <div className="min-h-screen overflow-auto"> {/* Use min-h-screen for scrolling */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${landingPic})`,
        }}
      >
        <Navbar className="fixed top-0 left-0 w-full z-50 shadow-md" />
        <div className="flex flex-row">
          <div className="px-64 items-start flex flex-col py-48">
            <motion.div 
              className="text-5xl font-bold text-pink-500"
              initial={{ opacity: 0, y: -30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
            >
              Motherly
            </motion.div>
            <motion.div 
              className="text-4xl font-bold pt-8 italic"
              initial={{ opacity: 0, y: -30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }} 
            >
              Find yourself in the journey!
            </motion.div>
            <div className="flex flex-row py-8">
              <Link to="/signup">
                <motion.button
                  className="bg-[#FF9999] py-2 px-8 text-white rounded-full transition-transform duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255, 153, 153, 0.7)" }} // Scale effect on hover
                  whileTap={{ scale: 0.95 }} // Scale effect on tap
                >
                  Create Account
                </motion.button>
              </Link>
              <Link to="/login">
                <motion.button
                  className="mx-4 px-16 py-2 border-2 border-black rounded-full transition-transform duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)" }} // Scale effect on hover
                  whileTap={{ scale: 0.95 }} // Scale effect on tap
                >
                  Login
                </motion.button>
              </Link>
            </div>
          </div>
          <div className="w-1/6 py-36">
            <motion.img 
              src={Mom} 
              alt="" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.4 }} 
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center" id="aboutUsSection">
        <motion.div 
          className="w-[15rem] mr-20"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.6 }} 
        >
          <img src={Pose} alt="" />
        </motion.div>
        <div className="flex flex-col">
          <motion.div className="text-5xl font-bold pb-4">
            About Us
          </motion.div>
          <motion.div className="text-4xl font-bold py-2">
            Assistance before & <br /> After Pregnancy
          </motion.div>
          <motion.div 
            className="font-light pt-6"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.8 }} 
          >
            "At Motherly, we understand the transformative journey of
            pregnancy <br />
            and motherhood. Our platform is dedicated to <br />
            nurturing the well-being of expectant mothers through tailored
            <br />
            activities such as yoga, meditation, and curated reading
            <br /> materials. We strive to provide compassionate guidance to
            <br /> empower mothers in preventing postpartum depression and
            <br />
            fostering a positive transition into motherhood."
          </motion.div>
        </div>
      </div>

      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${landingBottom})`,
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <motion.div
            className="pt-80 mt-24 text-white text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }} // Initial state for animation
            animate={{ opacity: 1, y: 0 }} // Animate to visible state
            transition={{ duration: 0.5 }} // Animation duration
          >
            How it works
          </motion.div>
          <div className="border-2 border-[#00FFC2] w-1/6 my-8"></div>
          <div className="flex flex-row py-8 items-center justify-center">
            {[
              { img: Profile, label: "Create Profile" },
              { img: Activity, label: "Activities" },
              { img: Thoughts, label: "Journal your thoughts" },
              { img: Therapy, label: "Therapy Assistance" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="w-1/6 px-8"
                whileHover={{ scale: 1.05, y: -5 }} // Scale effect on hover
                whileTap={{ scale: 0.95 }} // Scale effect on tap
                initial={{ opacity: 0 }} // Initial state for animation
                animate={{ opacity: 1 }} // Animate to visible state
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }} // Staggered animation
              >
                <img src={item.img} alt="" />
                <div className="py-4 text-white flex items-center justify-center font-light text-xl">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
