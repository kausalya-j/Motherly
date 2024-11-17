import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../assets/Mom.png";

function Sidebar() {
  const [userName, setUserName] = useState("Guest");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("user");
    console.log("Raw stored user data:", storedData);
    try {
      const parsedData = JSON.parse(storedData);
      console.log("Parsed user data:", parsedData);
      if (parsedData && parsedData.user && parsedData.user.username) {
        setUserName(parsedData.user.username); // Adjusted path to username
      } else {
        setUserName("Guest");
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      setUserName("Guest");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="w-1/4 h-screen bg-[#FFF4F4] flex flex-col justify-between items-center font-bold">
      <div className="flex-1 flex flex-col py-8 items-center text-black">
        <div className="text-xl mb-4">My Profile</div>
        <div className="py-4 flex justify-center">
          <img
            className="w-1/2 rounded-full shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            src={Image}
            alt="Profile"
          />
        </div>
        <div
          className={`py-4 text-2xl profile-text hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:animate-pulse ${
            isLoading ? "opacity-50" : ""
          }`}
          style={{
            display: "inline-block",
          }}
        >
          {isLoading ? "Loading..." : userName}
        </div>
      </div>
      <div className="flex flex-col pb-8 text-black">
        <div className="py-2">
          <Link
            to="/user"
            className="flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-[#F38FB1] hover:text-white"
          >
            Home
          </Link>
        </div>
        {/* <div className="py-2">
          <Link
            to="/user"
            className="flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-[#F38FB1] hover:text-white"
          >
            Settings
          </Link>
        </div> */}
        <div className="py-2">
          <Link
            to="/contacts"
            className="flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-[#F38FB1] hover:text-white"
          >
            Contacts
          </Link>
        </div>
        <div className="py-2">
          <button
            onClick={handleLogout}
            className="flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-[#F38FB1] hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
